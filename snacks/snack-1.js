const books = require(`../books`);

const longBooks = books.filter(book => book.pages > 300);

const longBooksTitles = longBooks.map(book => book.title);

console.log(longBooksTitles);