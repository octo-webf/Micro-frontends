const express = require("express");
const server = express();
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

createProxy("/react1", "http://localhost:7001");
createProxy("/react2", "http://localhost:7002");
createProxy("/react3", "http://localhost:7003");
createProxy("/angular", "http://localhost:7004");

server.get("/", (req, res) => res.render("index"));

const port = process.env.PORT || 7000;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});
