const ora = require("ora");

const spinner = ora().start();
spinner.text = "downloading";

setTimeout(() => {
  spinner.succeed("download succeed");
}, 3000);
