const books = require(`../books`);

const ages = books.map(book => book.author.age);
console.log(`le età degli auronti sono:\n${ages}`);

const agesSum = ages.reduce((acc, age) => acc + age, 0)
console.log(`La soma delle età è: ${agesSum}`);

const averageAge = agesSum / ages.length;
console.log(`L'età media è di: ${averageAge}`);