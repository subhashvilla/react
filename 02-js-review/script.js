const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(1);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// USING A SPREAD OPERATOR

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newgenre = [...genres, "epic fantasy"];
newgenre;

// adding new properties an existing properties
const updatedbook = {
  ...book,
  // adding a new properties
  moviepublicatondate: "2001-12-19",
  // update an existing propertie
  pages: 1210,
};
updatedbook;

const summary = `${title} is a book and contain pages ${pages} and publish in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// IF ELSE CONDITIONS

const pagesrange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesrange;

// NORMAL FUNCTION
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getyear(publicationDate));

// ARROW FUNCTION

const getyear = (str) => str.split("-")[0];

console.log(getyear(publicationDate));

console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// function gettotalreviewcount(book){
//     const goodreads = book.reviews.goodreads=
// }

// ARRAY MAP METHOD

const books = getBooks();

// const x = [1, 2,3,4,5].map(el) => el*2;
// console.log(x);

// ARROW FUNCTION USING MAP
const titles = books.map((book) => book.title);
titles;

// NORMAL FUNCTION USING MAP
const titless = books.map(function (book) {
  return book.title;
});
titless;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

// ARRAY FILTER METHOD
const longbooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longbooks;

const adventurebooks = books.filter((books) =>
  books.genres.includes("adventure")
);
adventurebooks;

// ARRAY REDUCE METHOD
const pagesAlbooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAlbooks;

// ARRAY SORT METHOD
const arr = [3, 7, 1, 8, 9];
const sorted = arr.sort((a, b) => a - b);
sorted;

const sortedbypages = books.slice().sort((a, b) => a.books - b.books);
sortedbypages;

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
// USING SPREAD OPERATOR ADD NEW ARRAY
const bookafteradd = [...books, newBook];
bookafteradd;

// 2) Delete book object from array
const booksAfterDelete = bookafteradd.filter((book) => book.id !== 3);
booksAfterDelete;

// ASYNCHROUNOUS JAVASCRIPT
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("subhash");

// ASYNC AND AWAIT
async function gettodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
gettodos();
