/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const BookOne = new Book(
    "BookOne",
    "AuthorOne",
    "Textbook",
    472,
    37,
    false
);

const BookTwo = new Book(
    "BookTwo",
    "AuthorTwo",
    "Fiction",
    280,
    165,
    false
);

const BookThree = new Book(
    "BookThree",
    "AuthorThree",
    "Non-fiction",
    343,
    254,
    false
);

const BookFour = new Book(
    "BookFour",
    "AuthorFour",
    "Sci-fi",
    256,
    0,
    true
);

const BookFive = new Book(
    "BookFive",
    "AuthorOne",
    "Textbook",
    560,
    122,
    false
);

console.log("The BookOne object:", BookOne);
console.log("The BookTwo object:", BookTwo);
console.log("The BookThree object:", BookThree);
console.log("The BookFour object:", BookFour);
console.log("The BookFive object:", BookFive);

BookThree.markCompleted();
