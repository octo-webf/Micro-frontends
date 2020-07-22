const express = require("express");
const server = express();

server.set("view engine", "ejs");
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => res.render("index"));

const port = process.env.PORT || 7000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
