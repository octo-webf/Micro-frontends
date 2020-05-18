const express = require("express");
const server = express();
const request = require("request");
const { createProxyMiddleware } = require("http-proxy-middleware");

server.set("view engine", "ejs");
server.use(express.static(__dirname + "/public"));

const createProxy = (path, target) =>
  server.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: { [`^${path}`]: "" },
    })
  );

createProxy("/react1", "http://localhost:5001/");
createProxy("/react2", "http://localhost:5002/");
createProxy("/react3", "http://localhost:5003/");

server.get("/", (req, res) =>
  Promise.all([
    getContents("http://localhost:5000/react1"),
    getContents("http://localhost:5000/react2"),
    getContents("http://localhost:5000/react3"),
  ])
    .then((responses) => {
      res.render("index", {
        react1: responses[0],
        react2: responses[1],
        react3: responses[2],
      });
    })
    .catch((error) => res.send(error.message))
);

const getContents = (url) =>
  new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) return resolve("Error loading " + url + ": " + error.message);

      return resolve(body);
    });
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});
