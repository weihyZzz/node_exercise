const fs = require("fs");
module.exports = {
  index(res) {
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  },
  user(postData, res) {
    // 处理user用户信息的逻辑
    console.log(postData);
  },
};
