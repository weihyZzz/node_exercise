const fs = require("fs")

fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('文件内容:', data);
})

// 文件不存在时的情景
fs.readFile('./b.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('文件内容:', data);
})