const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("got a DEELETE request at /user");
});

app.listen(port, () => {
  console.log(`app is listening on port ${3000}`);
});

//// serve static assets from public folder
app.use(express.static("public"));

//// load at specific path
// app.use("/tomnook", express.static("public"));

//// node path module provides a way of working with directories and file paths. join joins paths/ __dirname gives directory of current file
// const path = require("path");
// app.use("/tomnook", express.static(path.join(__dirname, "public")));
