import express, { Application, Request, Response } from 'express';
import {connectMongo} from './connection';
// import {participant} from './models/participant.model';
// import { user } from './models/user.models';
import { router } from './routes/index.routes';
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '8001');
app.use(express.json())
router(app);

app.get("/", (req: Request, resp: Response) => {
  resp.send("connection mongodb")
});

const startServer = async () =>{
  await connectMongo();
  // await participant.save();
  // await user.save();
  app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
  });
}

startServer();