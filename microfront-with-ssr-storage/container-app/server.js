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

createProxy("/react-app-1", "http://localhost:8001/");
createProxy("/react-app-2", "http://localhost:8002/");
createProxy("/vue-app", "http://localhost:8003/");

server.get("/", (req, res) =>
  Promise.all([
    getContents("http://localhost:8000/react-app-1"),
    getContents("http://localhost:8000/react-app-2/cart"),
    getContents("http://localhost:8000/vue-app"),
  ])
    .then((responses) => {
      res.render("index", {
        react_app_1: responses[0],
        react_app_2: responses[1],
      });
    })
    .catch((error) => res.send(error.message))
);

server.get("/cart", (req, res) =>
  Promise.all([
    getContents("http://localhost:8000/react-app-2"),
    getContents("http://localhost:8000/vue-app/cart"),
  ])
    .then((responses) => {
      res.render("cart", {
        react_app_2: responses[0],
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
