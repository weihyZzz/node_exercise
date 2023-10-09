#! /usr/bin/env node

const { program } = require("commander");
const myaction = require("../lib/core/action");
// option用于定义命令行选项的方法
program
  .option("-f --framework <framework>", "设置框架")
  .option("-d --debug", "开启调试");

program
  .command("create <project> [other...]")
  .description("创建项目")
  .action(myaction);

// parse用于解析命令行参数
program.parse(process.argv);
