"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви подивились?", "");
  }
}
start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB() {
  if (personalMoviesDB.privat === false) {
    console.log(personalMoviesDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genres = prompt(`ваш любимій жанр &{i}`);
    personalMoviesDB.genres[i - 1] = genres;
  }
}
writeYourGenres(); 

// let i = 0;

// do{
// 	const a = prompt("Останній фільм?", ""),
//     b = prompt("Яка оцінка?", "");
//   if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
//     console.log("true");
//     personalMoviesDB.movies[a] = b;
//     i++;
//   } else {
//     console.log("false");
//     i--;
//   }

// }
// while ( i < 2)

// let i = 0;
// while ( i <2){
// 	const a = prompt("Останній фільм?", ""),
//     b = prompt("Яка оцінка?", "");
//   if (
//     a !== null &&
//     b !== null &&
//     a !== "" &&
//     b !== "" &&
//     a.length < 50
//   ) {
// 	 console.log("true");
//      personalMoviesDB.movies[a] = b;
//   	   i++
//   } else {
// 	 console.log("false");
//     i--;
//   }

// }

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Останній фільм?", ""),
      b = prompt("Яка оцінка?", "");
    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
      console.log("true");
      personalMoviesDB.movies[a] = b;
    } else {
      console.log("false");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonaLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("просмотренно довольно мало фільмов");
  } else if (personalMoviesDB.count <= 30) {
    console.log("ві классический зритель");
  } else if (personalMoviesDB.count > 30) {
    console.log("ві кіноман");
  } else {
    console.log("произошла ошибка");
  }
}
detectPersonaLevel();

console.log(personalMoviesDB);
