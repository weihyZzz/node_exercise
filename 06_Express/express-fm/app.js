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
// 应用urlencoded中间件，用于解析application/x-www-form-urlencoded格式的请求体数据
app.use(express.urlencoded());
// 用于解析application/json格式的请求体数据
app.use(express.json());
app.get("/", async function (req, res) {
  try {
    let back = await readFile("./db.json", "utf8");
    const userObj = JSON.parse(back).users;
    res.send(userObj);
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.post("/", async (req, res) => {
  console.log("请求头信息:", req.headers);
  console.log("req", req.body);
});

app.listen(3000, () => {
  console.log("Run http://127.0.0.1:3000");
});
