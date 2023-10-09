const fs = require("fs")
fs.access('./a.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('文件不存在')
        return
    }
    console.log('文件存在');
})