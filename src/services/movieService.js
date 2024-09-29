import movieData from "../data/movieData.js";

import uniqid from "uniqid";

const getAll = async (filter = {}) => {
    let movies = await movieData.getAll();

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