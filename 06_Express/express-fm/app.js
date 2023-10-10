const express = require("express");
const fs = require("fs");
const { promisify } = require("util");
// 将fs.readFile promise化
const readFile = promisify(fs.readFile);
const app = express();
// app.get("/", function (req, res) {
//   fs.readFile("./db.json", "utf8", (err, data) => {
//     if (!err) {
//       var back = JSON.parse(data);
//       res.send(back.users);
//     } else {
//       res.status(500).json({ err });
//     }
//   });
// });
// 避免回调地狱，将readFile Promise化
app.get("/", async function (req, res) {
  try {
    let back = await readFile("./db.json", "utf8");
    const userObj = JSON.parse(back).users;
    res.send(userObj);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3000, () => {
  console.log("Run http://127.0.0.1:3000");
});
