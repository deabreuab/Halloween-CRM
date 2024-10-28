import express, { Application } from 'express';
import connectMongo from './connection';
import Participant from './models/participant.model';


const app: Application = express();
const PORT: number = 8000;

const startServer = async () =>{
    await connectMongo();
    const participant = new Participant({
        email:"rosa@gmail.com",
        name:"rosa",
        createdBy:"maria",
    });
    await participant.save();
    console.log(participant)
    app.listen(PORT, (): void => {
        console.log('SERVER IS UP ON PORT:', PORT);
    });
}


startServer();