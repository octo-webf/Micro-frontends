const express = require("express");
const server = express();
const request = require("request");

server.set("view engine", "ejs");
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) =>
  Promise.all([
    getContents("http://localhost:5001/"),
    getContents("http://localhost:5002/"),
    getContents("http://localhost:5003/"),
  ])
    .then((responses) =>
      res.render("index", {
        react1: responses[0],
        react2: responses[1],
        react3: responses[2],
      })
    )
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
