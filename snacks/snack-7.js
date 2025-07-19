const books = require(`../books`);

const tagsArr = [];

const tagCountObj = books.reduce((newObj, book) => {
    book.tags.forEach(tag => {
        if (!newObj[tag]) {
            newObj[tag] = 0;
        }
        newObj[tag]++;
    })
    return newObj;
}, {})

console.log(tagCountObj)