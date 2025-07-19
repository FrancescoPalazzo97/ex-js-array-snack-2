const books = require(`../books`);

const availableBooks = books.filter(book => book.available);

const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace(`€`, ``));
    const discountedPrice = (price * .8).toFixed(2);
    return {
        ...book,
        price: `${discountedPrice}€`
    }
})
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find(book => {
    const price = parseFloat(book.price.replace(`€`, ``));
    return Number.isInteger(price);
});
console.log(fullPricedBook)