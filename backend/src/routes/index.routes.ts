import express, {Application, Router} from "express";
import { routerUser } from "./user.routes";
import { opportunitiesRouter } from "./opportunities.routes";

function router(app:Application): void {
  const routes: Router = express.Router(); 
  app.use('/home', routes);  
  routes.use('/user', routerUser);
  routes.use('/opportunities', opportunitiesRouter);
}

export { router };