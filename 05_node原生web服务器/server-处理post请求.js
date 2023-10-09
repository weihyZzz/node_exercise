const http = require("http");
const fs = require("fs");
const url = require("url");

var server = http.createServer();
server.listen(8080, function () {
  console.log("http://127.0.0.1:8080");
});

// on 用于监听服务端事件
server.on("request", function (req, res) {
  console.log("访问");
  //   res.setHeader("Content-type", "text/plain;charset=utf-8");
  res.setHeader("Content-type", "text/html;charset=utf-8");
  //   根据请求方法处理
  if (req.method == "GET") {
    console.log(url.parse(req.url, true).query);
    //   根据请求路径判断返回内容
    if (req.url == "/") {
      fs.readFile("./index.html", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.write(data);
          res.end();
        }
      });
    } else if (req.url == "/aniya.jpeg") {
      fs.readFile("./aniya.jpeg", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.write(data);
          res.end();
        }
      });
    }
  } else if (req.method == "POST") {
    var data = "";
    req.on("data", function (d) {
      data += d;
    });
    req.on("end", function () {
      console.log(require("querystring").parse(data));
    });
    res.end();
  }
});
