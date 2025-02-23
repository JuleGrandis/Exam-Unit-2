//#region Started on higher order function didn't make it in time.
function bookSorting (operation) {
    return function (books) {
        switch (operation) {
            case "booksStartingWithThe":
                const result1 = [];
                const titles1 = [];
                for (let i = 0; i < books.length; i++) {
                    if (books[i].title.startsWith("The")) {
                        result1.push(books[i]);
                        titles1.push(books[i].title);
                    }
                }

                return { result1, titles1 };
            
            case "booksByAuthorT":
                const result2 = [];
                const titles2 = [];
                for (let i = 0; i < books.length; i++) {
                    if (books[i].author.toLowerCase().includes("t")) {
                        result2.push(books[i])
                        titles2.push(books[i].title)
                    }
                }

                return { result2, titles2 };
        }
    }
}
//#endregion


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
    
}

export function booksAfter1992(books) {
    let count = 0;
    const titles = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year >= 1992) {
            count ++;
            titles.push(books[i].title);
        }
    }

    return { count, titles };
}

export function booksBefore2004(books) {
    let count = 0;
    const titles = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year <= 2004) {
            count++
            titles.push(books[i].title);
        }
    }

    return { count, titles };
}

export function isbnAuthor(books, authorName) {
    const result = [];
    for (let i =0; i < books.length; i++) {
        if (books[i].author === authorName){
            result.push(books[i].isbn);
        }
    }

    return result;
}

export function sortBooksChrono(books, ascending = true) {
    const sortedBooks = [...books];
    for (let i = 0; i < sortedBooks.length - 1; i++) {
        for (let j = i + 1; j < sortedBooks.length; j++) {
            if ((ascending && sortedBooks[i].publication_year > sortedBooks[j].publication_year) 
                || (!ascending && sortedBooks[i].publication_year < sortedBooks[j.publication_year])) {
                
                const temp = sortedBooks[i];
                sortedBooks[i] = sortedBooks [j];
                sortedBooks [j] = temp;
            }
        }
    }

    return sortedBooks;
}

export function sortBooksAlphabetically(books, ascending = true) {
    const sortedBooks = [...books];
    for (let i = 0; i < sortedBooks.length - 1; i++) {
        for (let j = i + 1; j < sortedBooks.length; j++) {
            const compare = sortedBooks[i].title.localeCompare(sortedBooks[j].title); //Note to self https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
            if ((ascending && compare > 0) || (!ascending && compare < 0)) {
                const temp = sortedBooks[i];
                sortedBooks[i] = sortedBooks[j];
                sortedBooks[j] = temp;
            }
        }
    }

    return sortedBooks;
}




