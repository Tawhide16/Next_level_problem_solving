interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

const Book: Book = {
  title: 'Atomic Habits',
  author: 'James Clear',
  publishedYear: 2000,
  isAvailable: true,
};

printBookDetails(Book);
