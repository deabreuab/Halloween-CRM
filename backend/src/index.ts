
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

app.get("/", (req: Request, resp: Response) => {
  resp.send("connection mongodb moongose")
});
const app: Application = express();
const PORT: number = 8000;

const startServer = async () =>{
    await connectMongo();
    console.log(participant)
    app.listen(PORT, (): void => {
        console.log('SERVER IS UP ON PORT:', PORT);
    });
}


startServer();