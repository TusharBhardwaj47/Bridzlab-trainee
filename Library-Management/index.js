import createBook from "./createBook.js";
import createMember from "./createMember.js";
import borrowBooks from "./borrowBooks.js";

createBook(1, "Java", "James Gosling", 500);
createBook(2, "JS", "Brendan Eich", 600);

createMember(101, "Tushar", "gold");

borrowBooks(101, [
    { bookId: 1, title: "Java", price: 500 },
    { bookId: 2, title: "JS", price: 600 }
]);