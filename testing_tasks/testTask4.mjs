import { booksStartingWithThe, booksByAuthorT, booksAfter1992, booksBefore2004, isbnAuthor, sortBooksChrono } from "../tasks/task4.mjs";
import test from "../test.mjs";
import { addSpacing } from "../utils/utilsFunctions.mjs";
import books from "../example_files/books.json" with { type: "json" };

const tester = test("Books functions tests");


// Books starting with "The"
const amountOfBooksStartingWithThe = booksStartingWithThe(books).result;
const titlesOfBooksStartingWithThe = booksStartingWithThe(books).titles;

tester.isEqual(amountOfBooksStartingWithThe.length, 34, "Number of books starting with 'The' should be 34");
// console.log(titlesOfBooksStartingWithThe);

addSpacing(1);

// Books with author with "t" in their name
const amountOfAuthorsT =  booksByAuthorT(books).result;
const authorsWithT = booksByAuthorT(books).titles;



tester.isEqual(amountOfAuthorsT.length, 51, "Number of books where the Author has 't' in their name");
// console.log(authorsWithT);

addSpacing(1);

// Books after 1992
const amountOfBooksAfter1992 = booksAfter1992(books).count;
const titleOfBooksAfter1992 = booksAfter1992(books).titles;

tester.isEqual(amountOfBooksAfter1992, 97, "Number of books published after 1992, should be 97");
// console.log(titleOfBooksAfter1992);

addSpacing(1);

// Books before 2004
const amountOfBooksBefore2004 = booksBefore2004(books).count;
const titleOfBooksBefore2004 = booksBefore2004(books).titles;

tester.isEqual(amountOfBooksBefore2004, 46, "Number of books published 2004, should be 46");
// console.log(titleOfBooksBefore2004);

addSpacing(1);

// Return the ISBN Number of a given author
tester.dosNotThrowError(()=> isbnAuthor(books, "Terry Pratchett"), "Testing if function works with input 'Terry Pratchett'");

addSpacing(1);
// Books in chronological order
tester.dosNotThrowError(()=> sortBooksChrono(books, true), "Testing if function works ascending")
tester.dosNotThrowError(()=> sortBooksChrono(books, false), "Testing if function works descending")

addSpacing(1);

// Books in alphabetical oprder


