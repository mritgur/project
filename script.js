const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors:{},
    genres:[],
    privat:false
};

const lasFilm1 = prompt('Один из последних просмотренных фильмов', '');
const cost1 = prompt('На сколько оцените его','');
const lasFilm2 = prompt('Один из последних просмотренных фильмов', '');
const cost2 = prompt('На сколько оцените его','');

personalMovieDB.movie[lasFilm1] = cost1;
personalMovieDB.movie[lasFilm2] = cost2;

console.log(personalMovieDB);