"use strict";

// alert('hello');

// const result = confirm('Are you here?');
//console.log (result);

//const answer = prompt('Are you 18?', '');
//console.log (answer + 5);

// const answers = [];

//  answers[0] = prompt('how are you?', '');
//  answers[1] = prompt('how are b?', '');
//  answers[2] = prompt('how are a?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const categoty = 'toys';

// console.log(`https://someurl.com/${categoty}`);

// const user = 'ivan';

// alert (`hello${user}`);

// incr++;

// decr--;


// const isChecked = 1,
//       isClosed = true;

// console.log (isChecked || isClosed);

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцуните его'),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцуните его');

      
personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;      

console.log(personalMovieDB);