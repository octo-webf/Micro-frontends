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

createProxy("/react1", "http://localhost:6001/");
createProxy("/react2", "http://localhost:6002/");
createProxy("/react3", "http://localhost:6003/");

server.get("/", (req, res) => res.render("index"));

const port = process.env.PORT || 6000;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});
