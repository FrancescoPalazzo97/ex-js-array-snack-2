const BOOKS_API = `http://localhost:3333/books`

async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

async function getBooks(ids) {
    return await Promise.all(ids.map(id => fetchJson(`${BOOKS_API}/${id}`)))
}

getBooks([2, 13, 7, 21, 19])
    .then(books => console.log(books))
    .catch(e => console.error(e))