const inquirer = require("inquirer");
const config = require("../../config");
const downloadFn = require("../core/download");
const myAction = async (project, args) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: config.framework,
      message: "请选择所需框架",
    },
  ]);
  // 下载代码模块
  downloadFn(config.frameToUrl[answer.framework], project);
};

module.exports = myAction;
