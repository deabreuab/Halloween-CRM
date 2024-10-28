
import connectMongo from './connection';
import Participant from './models/participant.model';
import express, { Application, Request, Response } from 'express';
// import {authMiddleware} from './middleware/auth.middleware';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '8001');
const secret: string = process.env.SECRET || 'secret';
// const auth = authMiddleware(secret);
// app.use(auth);

router(app);

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