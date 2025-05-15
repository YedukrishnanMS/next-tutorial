import { connectDB } from "./dbConnector.js"
import { Author } from "./models/Author.js"
import { Movie } from "./models/Movie.js"
import { Review } from "./models/Review.js"


export const resolvers ={
    Query:{
        getMovie: async (_,{ id }) => {
            return await Movie.findById(id)
        },
        getAllMovies: async () => {
            return await Movie.find()
        },
        getReview: async (_,{ id }) => {
            return await Review.findById(id)
        },
        getAllReviews: async () => {
            return await Review.find()
        },
        getAuthor: async (_,{ id }) => {
            return await Author.findById(id)
        },
        getAllAuthors: async () => {
            return await Author.find()
        },
        getReviewsByMovie: async(_,{ id }) => {
            return await Review.find( {movie_id:id} )
        }
    },
    Mutation:{
        addMovie: async(_,{ input }) => {
            const newMovie = new Movie(input);
            return await newMovie.save();
        },
        addReview: async(_,{ input }) => {
            const newReview = new Review(input);
            return await newReview.save();
        },
        addAuthor: async(_,{ input }) => {
            const newAuthor = new Author(input);
            return await newAuthor.save();
        },
    }
}