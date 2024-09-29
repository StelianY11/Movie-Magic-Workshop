import movieData from "../data/movieData.js";

import uniqid from "uniqid";

const getAll = () => movieData.getAll();

const create = (movie) => {
    movie.id = uniqid();

    return movieData.create(movie);
};

export default {
    getAll,
    create,
}