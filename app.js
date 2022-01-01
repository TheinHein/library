let myLibrary = [
  { title: "The Hobbit", author: "Tjj", numberOfPages: 453, isRead: "No" },
  {
    title: "Lord of the Rings",
    author: "Toyel",
    numberOfPages: 234,
    isRead: "No",
  },
];

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.isRead}`;
  };
}

function addBookToLibrary(title, author, numberOfPages, isRead) {
  const book = new Book(title, author, numberOfPages, isRead);
  myLibrary.push(book);
  addABookTableRow(book);
}

function createABookTableRow(book) {
  const tableRow = document.createElement("tr");
  const title = document.createElement("th");
  const author = document.createElement("td");
  const numberOfPages = document.createElement("td");
  const isRead = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("del-btn");
  title.setAttribute("scope", "row");
  title.textContent = book.title;
  author.textContent = book.author;
  numberOfPages.textContent = book.numberOfPages;
  isRead.textContent = book.isRead;
  tableRow.appendChild(title);
  tableRow.appendChild(author);
  tableRow.appendChild(numberOfPages);
  tableRow.appendChild(isRead);
  tableRow.appendChild(deleteBtn);
  return tableRow;
}

const library = document.querySelector(".library");
function displayBooks(books) {
  for (let book of books) {
    const tableRow = createABookTableRow(book);
    library.appendChild(tableRow);
  }
}

displayBooks(myLibrary);
function addABookTableRow(book) {
  const tableRow = createABookTableRow(book);
  library.appendChild(tableRow);
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.elements["title"].value;
  const author = form.elements["author"].value;
  const numberOfPages = form.elements["numberOfPages"].value;
  const isRead = form.elements["isRead"].value;
  addBookToLibrary(title, author, numberOfPages, isRead);
  formControl.classList.toggle("hidden");
});

const newBtn = document.querySelector("#newBookForm");
const formControl = document.querySelector(".formControl");
const cancelForm = document.querySelector(".cancelForm");

newBtn.addEventListener("click", (e) => {
  formControl.classList.toggle("hidden");
});

cancelForm.addEventListener("click", (e) => {
  formControl.classList.toggle("hidden");
});
