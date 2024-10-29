import express, { Application, Request, Response } from 'express';
import {connectMongo} from './connection';
import { router } from './routes/index.routes';
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000');
app.use(express.json())
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