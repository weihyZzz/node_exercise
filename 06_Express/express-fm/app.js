const express = require("express");
const fs = require("fs");
const { promisify } = require("util");
const db = require("./db");
// 将fs.readFile promise化
const readFile = promisify(fs.readFile);
const writeFlile = promisify(fs.writeFile);
const app = express();

// 避免回调地狱，将readFile Promise化
// 应用urlencoded中间件，用于解析application/x-www-form-urlencoded格式的请求体数据
app.use(express.urlencoded());
// 用于解析application/json格式的请求体数据
app.use(express.json());
app.get("/", async function (req, res) {
  try {
    // 获取db.json本地存储的对象
    let data = await db.getDb();
    res.send(data.users);
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.post("/", async (req, res) => {
  //   console.log("请求头信息:", req.headers);
  console.log("req", req.body);
  let body = req.body;
  if (body == {}) {
    res.status(403).json({
      error: "缺少用户信息",
    });
  }
  //   let dbData = await readFile("./db.json", "utf8");
  //   let dbDataObj = JSON.parse(dbData);
  let dbDataObj = await db.getDb();
  let userObj = dbDataObj.users;
  let newId = userObj[userObj.length - 1].id + 1;
  //   将新id放入body中
  body.id = newId;
  userObj.push(body);
  console.log("新增数据后的dbDataObj", dbDataObj);
  //   写入本地db.json
  try {
    // let writeRes = await writeFlile("./db.json", JSON.stringify(dbDataObj));
    let writeRes = await db.writeDb(dbDataObj);
    if (!writeRes) {
      res.status(200).send({
        msg: "写入成功",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.put("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    let userInfo = await db.getDb();
    let userId = Number.parseInt(req.params.id);
    // 查找id为userId的用户
    let targetUser = userInfo.users.find((item) => item.id === userId);
    // console.log("targetUser", targetUser);
    let body = req.body;
    // 开始修改该id的用户信息
    targetUser.username = body.username ? body.username : targetUser.username;
    targetUser.age = body.age ? body.age : targetUser.age;

    // 修改
    userInfo.users[targetUser.id - 1] = targetUser;
    // 存放新用户信息
    let writeRes = await db.writeDb(userInfo);
    if (!writeRes) {
      res.status(201).send({
        msg: "写入成功",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});
app.listen(3000, () => {
  console.log("Run http://127.0.0.1:3000");
});
