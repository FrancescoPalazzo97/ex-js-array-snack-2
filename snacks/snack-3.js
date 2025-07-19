const books = require(`../books`);

const authors = books.map(book => book.author);
console.log(`Gli autori sono:\n`, authors);

const areAuthorsAdults = authors.every(author => author.age >= 18);
console.log(`Gli autori sono tutti maggiorenni? ${areAuthorsAdults}`);

authors.sort((a, b) => {
    if (areAuthorsAdults) {
        return a.name.localeCompare(b.name);
    } else {
        return b.name.localeCompare(a.name);
    }
})

let message;

areAuthorsAdults ?
    message = `Ecco gli utenti in ordine alfabetico crescente` :
    message = `Ecco gli utenti in ordine alfabetico decrescente`

console.log(`${message}:\n`, authors)
