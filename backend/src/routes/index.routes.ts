import { Application, Router } from "express";
import { routerUser } from "./user.routes";
import { routerParticipant } from "./participant.routes";
import { opportunitiesRouter } from "./opportunities.routes";


function router(app: Application): void {
  const routes: Router = Router();
  app.use('/home', routes);

  routes.use('/user', routerUser);
  routes.use('/participant', routerParticipant);
  routes.use('/opportunities', opportunitiesRouter);
}

export { router };