/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

class Book {
    constructor(
        title,
        author,
        genre,
        numberOfPages,
        currentPage,
        completionStatus
    ) {
        this.title = title;
        this.author = author;
        this.genre - genre;
        this.numberOfPages = numberOfPages;
        this.currentPage = currentPage;
        this.completionStatus = completionStatus;
    }

    setCurrentPage(pageNumber) {
        this.currentPage = pageNumber;
    }

    markCompleted() {
        this.completionStatus = true;
        this.currentPage = 0;
        console.log(`${this.title} is now marked as completed`);
    }
}

export default Book;
