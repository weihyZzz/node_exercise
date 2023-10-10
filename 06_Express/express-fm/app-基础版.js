const express = require("express");
var fs = require("fs");
const app = express();
app.get("/", function (req, res) {
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (!err) {
      var back = JSON.parse(data);
      res.send(back.users);
    } else {
      res.status(500).json({ err });
    }
  });
});

app.listen(3000, () => {
  console.log("Run http://127.0.0.1:3000");
});
