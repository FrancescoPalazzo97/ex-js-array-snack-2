const books = require(`../books`);

const areThereAvalaibleBooks = books.some(book => book.available === true);
console.log(areThereAvalaibleBooks);

const bookByPrice = books.sort((a, b) => {
    priceA = parseInt(a.price.replace(`€`, ``));
    priceB = parseInt(b.price.replace(`€`, ``));
    return priceA - priceB;
})
console.log(bookByPrice)

bookByPrice.sort((a, b) => {
    let item1;
    let item2;

    a.available ?
        item1 = 0 :
        item1 = 1

    b.available ?
        item2 = 0 :
        item2 = 1

    return item2 - item1;
})
console.log(bookByPrice)