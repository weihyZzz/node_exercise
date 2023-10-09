const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "输入项目名称",
    },
    {
      type: "password",
      name: "userPassword",
      message: "输入密码",
      mask: "*",
    },
    {
      type: "list",
      name: "projectFramework",
      message: "请选择前端框架",
      choices: ["React", "Vue", "Angular"],
    },
    {
      type: "confirm",
      name: "confirm",
      message: "确认？",
    },
  ])
  .then((answer) => {
    console.log("用户输入信息", answer);
  });
