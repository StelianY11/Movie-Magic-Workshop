import movieData from "../data/movieData.js";

import uniqid from "uniqid";

const getAll = async (query = {}) => {
    let movies = await movieData.getAll();

    if(query.search) {
        movies = movies.filter(m => m.title.toLowerCase().includes(query.search.toLowerCase()));
    }

    if(query.genre) {
        movies = movies.filter(m => m.genre.toLowerCase().includes(query.genre.toLowerCase()));
    }

    if(query.year) {
        movies = movies.filter(m => m.year === query.year);
    }

    return movies;
};

const create = (movie) => {
    movie.id = uniqid();
    movie.rating = Number(movie.rating);

    return movieData.create(movie);
};

const getOne = async (movieId) => {
    const movies = await movieData.getAll();

    const resultMovie = movies.find(m => m.id === movieId);
    
    return resultMovie;
};
 
export default {
    getAll,
    create,
    getOne,
}