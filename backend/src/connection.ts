import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// process.loadEnvFile();
if(!process.env.MONGO_URI){
  throw new Error('Las variables de entorno para la base de datos no están definidas');
}

const MONGO_URI = process.env.MONGO_URI;
const connectMongo = async() =>{
    try {       
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export {connectMongo};
