const fs = require("fs");
const url = require("url");
var controller = require("./controller");
module.exports = (req, res) => {
  console.log("访问");
  //   res.setHeader("Content-type", "text/plain;charset=utf-8");
  res.setHeader("Content-type", "text/html;charset=utf-8");
  //   根据请求方法处理
  if (req.method == "GET") {
    console.log(url.parse(req.url, true).query);
    //   根据请求路径判断返回内容
    if (req.url == "/") {
      controller.index(res);
    } else if (req.url == "/aniya.jpeg") {
      fs.readFile("./aniya.jpeg", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.write(data);
          res.end();
        }
      });
    } else {
      res.end();
    }
  } else if (req.method == "POST") {
    var data = "";
    req.on("data", function (d) {
      data += d;
    });
    req.on("end", function () {
      controller.user(require("querystring").parse(data), res);
    });
    res.end();
  }
};
