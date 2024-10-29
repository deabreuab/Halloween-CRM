import { Application, Router } from "express";
import { routerUser } from "./user.routes";

function router(app: Application): void {
    const routes: Router = Router();
    app.use('/home', routes);  

    routes.use('/user', routerUser);
    routes.use('/participant', routerParticipant);
  routes.use('/opportunities', opportunitiesRouter);
}

export {  router  };