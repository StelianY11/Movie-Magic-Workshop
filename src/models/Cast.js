import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        validate: [/^[A-Za-z0-9 ]+$/, "Name can contain only letters, numbers!"]
    },
    age: {
        type: Number,
        min: 1,
        max: 120,
    },
    born: {
        type: String,
        minLength: 10,
        validate: [/^[A-Za-z0-9 ]+$/, "Born can contain only letters, numbers!"]
    },
    imageUrl: {
        type: String,
        validate: [/^https?:\/\//, "Invalid image url!"],   
    },
});

const Cast = model("Cast", castSchema);

export default Cast;