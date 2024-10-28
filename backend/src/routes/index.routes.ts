import express, {Application, Router} from "express";
import { routerUser } from "./user.routes";

function router(app:Application): void {
  const routes: Router = express.Router(); 
  app.use('/home', routes);  
  routes.use('/user', routerUser);
}

export {router};