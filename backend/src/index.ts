import express, { Application, Request, Response } from 'express';
import {connectMongo} from './connection';
import cors from 'cors'; 
import { router } from './routes/index.routes';
import { authMiddleware } from './middleware/auth.middleware';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');

app.use(cors());
app.use(express.json())
const secret: string = process.env.secret || 'secret';
app.use(authMiddleware(secret));
router(app);

app.get("/", (req: Request, resp: Response) => {
  resp.send("connection mongodb moongose")
});

const startServer = async () =>{
  await connectMongo();
  app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
  });
}

startServer();