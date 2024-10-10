import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, "Title can contain only letters, numbers!"]
    },
    genre: {
        type: String,
        required: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, "Genre can contain only letters, numbers!"]
    },
    director: {
        type: String,
        required: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, "Director can contain only letters, numbers!"]
    },
    year: {
        type: Number,
        required: true,
        min: [1900, "Cannot add movies before 1900!"],
        max: [2050, "Cannot add movies after 2050!"],
    },
    rating: {
        type: Number,
        validate: {
            validator: function(value) {
                if(this.year >= 2000){
                    return !!value;
                }

                return true;
            },
            message: "Rating is required for movies after 2000 year."
        },
        min: [1, "Rating should be at least 1"],
        max: [10, "Rating cannot be higher than 10"],
    },
    description: {
        type: String,
        required: true,
        minLength: [20, "Description should be at lest 20 characters!"]
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//, "Invalid image url!"],   
    },
    casts: [{
        character: {
            type: String,
            minLength: 5,
            validate: [/^[A-Za-z0-9 ]+$/, "Character can contain only letters, numbers!"],
        },
        cast: {
            type: Types.ObjectId,
            ref: "Cast",
        },
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;