import Movie from "../models/movie.js";

const getAll = (filter = {}) => {
    let movies = Movie.find();

    if(filter.search) {
        movies = movies.filter(m => m.title.toLowerCase().includes(filter.search.toLowerCase()));
    }

    if(filter.genre) {
        movies = movies.filter(m => m.genre.toLowerCase().includes(filter.genre.toLowerCase()));
    }

    if(filter.year) {
        movies = movies.filter(m => m.year === filter.year);
    }

    return movies;
};

const create = (movie) =>  Movie.create(movie);


const getOne = (movieId) => Movie.findById(movieId);
 
export default {
    getAll,
    create,
    getOne,
}