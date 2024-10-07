import Movie from "../models/movie.js";

const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        //movies = movies.filter(m => m.title.toLowerCase().includes(filter.search.toLowerCase()));
        moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } });
        //moviesQuery.regex('title', new RegExp(filter.search, 'i')); second option
    }

    if (filter.genre) {
        //movies = movies.filter(m => m.genre.toLowerCase().includes(filter.genre.toLowerCase()));
        moviesQuery.find({ genre: { $regex: filter.genre, $options: 'i' } });
    }

    if (filter.year) {
        //movies = movies.filter(m => m.year === filter.year);
        moviesQuery.find({ year: filter.year });
        //moviesQuery.where('year').equals(filter.year); second option
    }

    return moviesQuery;
};

const create = (movie, ownerId) => Movie.create({ ...movie, owner: ownerId });


const getOne = (movieId) => Movie.findById(movieId).populate("casts.cast");

const attach = (movieId, castId, character) => {
    //const movie = await Movie.findById(movieId);
    //movie.casts.push(castId);
    //return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, character } } })
}

export default {
    getAll,
    create,
    getOne,
    attach,
}