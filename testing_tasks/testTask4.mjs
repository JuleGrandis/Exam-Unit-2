import { booksStartingWithThe, booksByAuthorT, booksAfter1992 } from "../tasks/task4.mjs";
import test from "../test.mjs";
import { addSpacing } from "../utils/utilsFunctions.mjs";
import books from "../example_files/books.json" with { type: "json" };

const tester = test("Books functions tests");


// Books starting with "The"
const amountOfBooksStartingWithThe = booksStartingWithThe(books).result;
const titlesOfBooksStartingWithThe = booksStartingWithThe(books).titles;

tester.isEqual(amountOfBooksStartingWithThe.length, 34, "Number of books starting with 'The' should be 34");
// console.log(titlesOfBooksStartingWithThe);

// Books with author with "t" in their name
const amountOfAuthorsT =  booksByAuthorT(books).result;
const authorsWithT = booksByAuthorT(books).titles;

addSpacing(1);

tester.isEqual(amountOfAuthorsT.length, 51, "Number of books where the Author has 't' in their name");
// console.log(authorsWithT);



