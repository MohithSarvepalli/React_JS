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

  //Destructuring

  const books = getBooks();
  books;
  const book1=getBook(3);
  book1;
  const book1Title=book1.title;
  book1Title;
  console.log(book1.author);

  const {title, author, pages, publicationDate, genres, hasMovieAdaptation}=book1;
  console.log(title, author, genres);
//   const primary_genre=genres[0];
//   const secondary_genre=genres[1];
//   console.log(primary_genre);
//Rest and Spread Operators
  const [primary_genre, secondary_genre, ...otherGenres]=genres;
  console.log(primary_genre,secondary_genre, otherGenres);

const newGenres=[...genres, 'epic','humor'];
console.log(newGenres);

const updatedBook={...book1, moviePublicationDate: '2000-12-19', pages:1210};
console.log(updatedBook);

//Template Literals.
const summary=`${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]}.`;
summary;

//Ternaries

const pagesRange=pages>1000? 'over a thousand':"less than 1000";
pagesRange;

//Arrow Functions

// function getYear(str){
//     return str.split('-')[0];
// }

getYear=(str)=>str.split('-')[0];
console.log(getYear(publicationDate));

console.log(true && 'Some string');
console.log(false && 'Some string');
console.log(hasMovieAdaptation && 'This book has a movie');
//falsy: 0,'',null,undefined
console.log('Mohith'&&'he will be successfull');

console.log(true||"Some String");
console.log(false||"Some String");
console.log(book1.translations.spanish);

const spanishTranslation=book1.translations.spanish||"NOT Trnaslated";
spanishTranslation;
console.log(NaN||false);

const count=book1.reviews.librarything?.reviewsCount??"no data";
count;

//Optional Chaining
function getTotalReviewCount(book){
    const goodread=book.reviews?.goodreads?.reviewsCount;
    const librarything=book.reviews?.librarything?.reviewsCount??0;
    return goodread+librarything;
}

console.log(getTotalReviewCount(book1));


//Array Methods -> MAP, FILTER, REDUCE and SORT
//MAP
const x=[1,2,3,4,5].map((el)=> el*2);
x;
const titles=books.map((book)=>book.title);
titles;

const essentialData=books.map((book)=>{
    return {
        title:book.title,
        author:book.author
    };
});

essentialData;

//FILTER

const longBooks=books.filter(book=>book.pages>500).filter(book=>book.hasMovieAdaptation).map(book=>book.title);
longBooks;

const adventureBooks=books.filter(books=>books.genres.includes("adventure")).map(book=>book.title);
adventureBooks;

//REDUCE
const pagesAllBooks=books.reduce((acc,book)=>acc+book.pages,0);
pagesAllBooks;

//SORT-> changes the orginal array
const arr=[3,5,4,2,16,23,11,5];
const sorted=arr.slice().sort((a,b)=>a-b);
sorted;
arr;

const sortedByPages=books.slice().sort((a,b)=>a.pages-b.pages).map(book=>book.title);
sortedByPages;

//Working with immuatable arrays
//1. Add book object to the Array
const newBook={
    id:6,
    title:"Harry Potter and the Chamber of Secrets",
    author:"J.K. Rowling",
};
const booksAfterAdd=[...books,newBook];
booksAfterAdd;

//2. Delete book Object from array

const booksAfterDelete=booksAfterAdd.filter(book=>book.id !==3);
booksAfterDelete;

// 3) Update a book object in the array

const booksAfterUpdate=booksAfterDelete.map(book=>book.id===1?{...book,pages:1210}:book);
booksAfterUpdate;

//Asynchronous JavaScript

//Promises

fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>console.log(data));
console.log('mohith');

//ASYNC/AWAIT

async function getTodos(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=await res.json();
    console.log(data);
}
getTodos();