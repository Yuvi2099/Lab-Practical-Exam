import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/productDB');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;