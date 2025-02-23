import { booksStartingWithThe, booksByAuthorT, booksAfter1992 } from "../tasks/task4.mjs";
import test from "../test.mjs";
import { addSpacing } from "../utils/utilsFunctions.mjs";
import books from "../example_files/books.json" with { type: "json" };

const tester = test("Books functions tests");

const amountOfBooksStartingWithThe = booksStartingWithThe(books).result;
const titlesOfBooksStartingWithThe = booksStartingWithThe(books).titles;

tester.isEqual(amountOfBooksStartingWithThe.length, 34, "Number of books starting with 'The' should be 34");
console.log(titlesOfBooksStartingWithThe);

