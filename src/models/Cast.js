import { Schema } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    nameInMovie: String,
    imageUrl: String,
});