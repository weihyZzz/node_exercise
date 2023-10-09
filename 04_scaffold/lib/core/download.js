const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const downloadFn = (url, project) => {
  // 设置命令行等待工具的对象
  const spinner = ora().start();
  spinner.text = "downloading...";
  download(url, project, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed(`download successful!`);
      console.log(chalk.blue.bold("run follow commands to start the project"));
      console.log(chalk.green("cd " + project));
      console.log(chalk.green("npm install"));
      console.log(chalk.green("npm run dev"));
    } else {
      spinner.fail("download fail");
    }
  });
};

module.exports = downloadFn;
