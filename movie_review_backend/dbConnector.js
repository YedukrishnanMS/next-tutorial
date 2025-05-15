import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/movies');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error:',error);
    }
}