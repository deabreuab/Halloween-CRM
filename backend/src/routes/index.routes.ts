import { Application, Router } from "express";
import { routerUser } from "./user.routes";
import { routerParticipant } from "./participant.routes";

function router(app: Application): void {
    const routes: Router = Router();
    app.use('/home', routes);  

    routes.use('/user', routerUser);
    routes.use('/participant', routerParticipant);
}

export { router };