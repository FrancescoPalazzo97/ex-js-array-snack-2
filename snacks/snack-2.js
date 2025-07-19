const books = require(`../books`);

const availableBooks = books.filter(book => book.available === true);

const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace(`€`, ``));
    const discountedPrice = Math.round((price * 0.8) * 100) / 100;
    return {
        ...book,
        price: `${discountedPrice}€`
    }
})

console.log(discountedBooks)