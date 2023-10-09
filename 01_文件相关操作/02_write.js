const fs = require("fs")
const content = 'node.js文件写入练习'

fs.writeFile('./write.txt', content, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('文件写入成功');
})