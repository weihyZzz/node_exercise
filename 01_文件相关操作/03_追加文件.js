const fs = require("fs")

fs.appendFile('./append.txt', '追加内容123', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('追加成功');
})