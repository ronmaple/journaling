// to conserve memory when creating a large number of similar objects
// (couldve been semi useful for the distribution pipeline project)

const books = new Map();

const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    return books.get(isbn);
  }

  const book = new Book(title, author, isbn);
  books.set(isbn, book);
  return book;
};

const bookList = [];
const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn,
  };

  bookList.push(book);
  return book;
};


// cons:
// prototype inheritance solves the same problem, and we don't have to worry about
// memory space because of modern tech.
// (but I can still see this being useful when running migration scripts)
// (or large data export pipelines)
