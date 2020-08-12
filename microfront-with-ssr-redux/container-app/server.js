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

createProxy("/react-app", "http://localhost:8001/");
createProxy("/vue-app", "http://localhost:8002/");

server.get("/", (req, res) =>
  Promise.all([
    getContents("http://localhost:8000/react-app"),
    getContents("http://localhost:8000/vue-app"),
  ])
    .then((responses) => {
      res.render("index", {
        react_app: responses[0],
        vue_app: responses[1],
      });
    })
    .catch((error) => res.send(error.message))
);

server.get("/basket", (req, res) =>
  Promise.all([
    getContents("http://localhost:8000/react-app"),
    getContents("http://localhost:8000/vue-app"),
  ])
    .then((responses) => {
      res.render("basket", {
        react_app: responses[0],
        vue_app: responses[1],
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
