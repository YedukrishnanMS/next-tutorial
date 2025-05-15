import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    rating: Number
})

export const Movie = mongoose.model('Movie',movieSchema)