import express, { Router } from 'express';
import { createUser, getUser, loginUser } from '../controllers/user.controller';

const routerUser: Router = express.Router();

routerUser.post('/', createUser);
routerUser.get('/', getUser);
routerUser.post('/login/', loginUser);

export {routerUser};