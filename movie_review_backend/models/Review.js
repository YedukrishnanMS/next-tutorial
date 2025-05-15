import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    author_id: String,
    movie_id: String,
    rating: Number,
    content: String
})

export const Review = mongoose.model('Review',reviewSchema)