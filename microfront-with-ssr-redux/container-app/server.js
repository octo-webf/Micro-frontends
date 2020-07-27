const path = require("path");
const fs = require("fs");
const express = require("express");
const React = require("react");
const App = require("./transpiled/App.js").default;
const { renderToString } = require("react-dom/server");
const { createProxyMiddleware } = require("http-proxy-middleware");

const ANGULAR_URL = "http://localhost:7001/";
const REACT_URL = "http://localhost:7002";
const VUE_URL = "http://localhost:7003/";

const server = express();

server.get("/", (req, res) => {
  const htmlPath = path.resolve(__dirname, "build", "index.html");

  fs.readFile(htmlPath, "utf8", (err, html) => {
    const rootElem = '<div id="react3">';
    const renderedApp = renderToString(React.createElement(App, null));

    res.send(html.replace(rootElem, rootElem + renderedApp));
  });
});

server.use(express.static("build"));

const createProxy = (path, target) =>
  server.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: { [`^${path}`]: "" },
    })
  );
createProxy("/angular", ANGULAR_URL);
createProxy("/react", REACT_URL);
createProxy("/vue", VUE_URL);

const port = process.env.PORT || 7000;
server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
