const myLibrary = [
  { title: "The Hobbit", author: "Tjj", numberOfPages: 453, isRead: "No" },
  {
    title: "Lord of the Rings",
    author: "Toyel",
    numberOfPages: 234,
    isRead: "No",
  },
];

// ** JS Functionality ** //

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

function createBook(title, author, numberOfPages, isRead) {
  return new Book(title, author, numberOfPages, isRead);
}

function addToLibrary(book, library) {
  return library.push(book);
}

function deleteBook(bookIndex, library) {
  return library.splice(bookIndex, 1);
}

// ** DOM Manipulation ** //

const library = document.querySelector(".library");
const formContainer = document.querySelector(".form-container");
const newFormBtn = document.querySelector("#new-form-btn");
const cancelFormBtn = document.querySelector("#cancel-form-btn");
const newForm = document.querySelector("#new-form");

newFormBtn.addEventListener("click", (e) => {
  formContainer.classList.toggle("hidden");
});

cancelFormBtn.addEventListener("click", (e) => {
  formContainer.classList.toggle("hidden");
});

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = newForm.elements["title"].value;
  const author = newForm.elements["author"].value;
  const numberOfPages = newForm.elements["numberOfPages"].value;
  const isRead = newForm.elements["isRead"].value;
  const book = createBook(title, author, numberOfPages, isRead);
  addToLibrary(book, myLibrary);
  createBookRow(book);
  addBookRow(book);
  formContainer.classList.toggle("hidden");
});

function delBookRow(bookIndex) {
  library.childNodes.forEach((bookRow) => {
    if (bookRow.dataset.key === bookIndex) {
      return bookRow.remove();
    }
  });
}

function createDelBookBtn(library) {
  const deleteBookBtn = document.createElement("button");
  deleteBookBtn.textContent = "DEL";
  deleteBookBtn.classList.add("del-book-btn");
  deleteBookBtn.dataset.key = library.length - 1;
  deleteBookBtn.addEventListener("click", (e) => {
    const bookIndex = e.target.dataset.key;
    deleteBook(bookIndex, myLibrary);
    delBookRow(bookIndex);
  });
  return deleteBookBtn;
}

function createBookRow(book) {
  const bookRow = document.createElement("tr");
  const title = document.createElement("th");
  const author = document.createElement("td");
  const numberOfPages = document.createElement("td");
  const isRead = document.createElement("td");
  const delBookContainer = document.createElement("td");
  const deleteBookBtn = createDelBookBtn(myLibrary);
  delBookContainer.appendChild(deleteBookBtn);
  bookRow.dataset.key = myLibrary.length - 1;
  title.setAttribute("scope", "row");
  title.textContent = book.title;
  author.textContent = book.author;
  numberOfPages.textContent = book.numberOfPages;
  isRead.textContent = book.isRead;
  bookRow.appendChild(title);
  bookRow.appendChild(author);
  bookRow.appendChild(numberOfPages);
  bookRow.appendChild(isRead);
  bookRow.appendChild(delBookContainer);
  return bookRow;
}

function addBookRow(book) {
  const bookRow = createBookRow(book);
  library.appendChild(bookRow);
}

function displayBooks(books) {
  for (let book of books) {
    const bookRow = createBookRow(book);
    library.appendChild(bookRow);
  }
}

displayBooks(myLibrary);
