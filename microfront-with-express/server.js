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

createProxy("/react1", "http://localhost:8001/");
createProxy("/react2", "http://localhost:8002/");
createProxy("/react3", "http://localhost:8003/");
createProxy("/angular", "http://localhost:8004/");

server.get("/", (req, res) =>
  Promise.all([
    getContents("http://localhost:8000/react1"),
    getContents("http://localhost:8000/react2"),
    getContents("http://localhost:8000/react3"),
    getContents("http://localhost:8000/angular")
  ])
    .then((responses) => {
      res.render("index", {
        react1: responses[0],
        react2: responses[1],
        react3: responses[2],
        angular: responses[3],
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

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});
