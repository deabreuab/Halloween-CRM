import mongoose from 'mongoose';
process.loadEnvFile();

const MONGO_URI = process.env.MONGO_URI;
const connectMongo = async() =>{
    try {       
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

export { connectMongo };
