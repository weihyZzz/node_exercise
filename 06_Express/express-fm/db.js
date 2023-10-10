// 封装读写db.json文件的函数
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFlile = promisify(fs.writeFile);

exports.getDb = async () => {
  let data = await readFile("./db.json", "utf8");
  return JSON.parse(data);
};
exports.writeDb = async (data) => {
  let stringData = JSON.stringify(data);
  return await writeFlile("./db.json", stringData);
};
