function booksStartingWithThe(books) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.startsWith("The")) {
            result.push(books[i]);
        }
    }

    return result;
}

function booksByAuthorT(books) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author.toLowercase().includes("t")) {
            result.push(books[i])
        }
    }

    return result;
}