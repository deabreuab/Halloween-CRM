import express, { Application, Request, Response } from 'express';
import {connectMongo} from './connection';
import { router } from './routes/index.routes';
// import {authMiddleware} from './middleware/auth.middleware';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '8001');
const secret: string = process.env.SECRET || 'secret';
// const auth = authMiddleware(secret);
// app.use(auth);

router(app);

app.get("/", (req: Request, resp: Response) => {
  resp.send("connection mongodb")
});

const startServer = async () =>{
  await connectMongo();
  app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
  });
}

startServer();