import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2050,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: String,
    casts: [{
        character: String,
        cast: {
            type: Types.ObjectId,
            ref: "Cast",
        },
    }],
});

const Movie = model('Movie', movieSchema);

export default Movie;