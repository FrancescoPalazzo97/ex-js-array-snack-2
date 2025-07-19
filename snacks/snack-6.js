const books = require(`../books`);

const areThereAvalaibleBooks = books.some(book => book.available);
console.log(areThereAvalaibleBooks);

const bookByPrice = books.sort((a, b) => {
    priceA = parseFloat(a.price.replace(`€`, ``));
    priceB = parseFloat(b.price.replace(`€`, ``));
    return priceA - priceB;
})
console.log(bookByPrice)

bookByPrice.sort((a, b) => {
    const item1 = a.available ? 0 : 1;
    const item2 = b.available ? 0 : 1;

    return item2 - item1;
})
console.log(bookByPrice)