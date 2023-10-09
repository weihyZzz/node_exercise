const download = require("download-git-repo");
download(
  "direct:https://gitee.com/wei_hao_yang/egg.git",
  "./cms",
  { clone: true },
  function (err) {
    console.log(err);
  }
);

// https://gitee.com/wei_hao_yang/express.git
