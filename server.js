const express = require("express");
const path = require("path");

// create express app

const app = express();

app.use(
  express.static(
    path.join(__dirname, "views") //
  )
);

//app.get("/", function (req,res) {
//    res.send("<h1>Home</h1>>");
//});

const port = process.env.PORT || 15218;

app.listen(port);

app.get("/*page/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/404.html"));
});

console.log(`Server running: http://localhost:${port}`);
