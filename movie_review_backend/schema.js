import { buildSchema } from "graphql";

export const schema = buildSchema(`
        type Movie {
            id: ID!
            title: String!
            rating: Float!
            reviews: [Review!]
        }
        
        type Review {
            id: ID!
            author: Author!
            movie: Movie!
            rating: Float!
            content: String!
        }

        type Author {
            id: ID!
            name: String!
            reviews: [Review!]
        }

        type Query {
            getMovie(id: ID!): Movie
            getReview(id: ID!): Review
            getAuthor(id: ID!): Author
            getAllMovies: [Movie]
            getAllReviews: [Review]
            getAllAuthors: [Author]
            getReviewsByMovie(id: ID!): [Review]
        }

        type Mutation {
            addMovie(input: MovieInput): Movie
            addReview(input: ReviewInput): Review
            addAuthor(input: AuthorInput): Author
        }

        input MovieInput {
            title: String!
            rating: Float!
        }

        input ReviewInput {
            author_id: ID
            movie_id: ID
            rating: Float
            content: String
        }

        input AuthorInput {
            name: String!
        }
    `)