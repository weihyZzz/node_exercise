const book1 = "book one"
const book2 = "book two"

const add = () => {
    console.log('执行add函数');
}

// exports.book1 = book1
// exports.book2 = book2
// exports.add = add

exports = {
    book1,
    book2,
    add
}