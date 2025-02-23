import books from "../example_files/books.json" with {type: "json"};

export function booksStartingWithThe(books) {
    const result = [];
    const titles = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.startsWith("The")) {
            result.push(books[i]);
            titles.push(books[i].title);
        }
    }

    return { result, titles };
}

export function booksByAuthorT(books) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author.toLowercase().includes("t")) {
            result.push(books[i])
        }
    }

    return result;
}

export function booksAfter1992(books) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year > 1992) {
            count ++;
        }
    }

    return count;
}



