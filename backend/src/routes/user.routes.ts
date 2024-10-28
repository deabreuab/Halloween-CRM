import express, { Router } from 'express';
import { createUser, getUser } from '../controllers/user.controller';

const routerUser: Router = express.Router();

routerUser.post('/', createUser);
routerUser.get('/', getUser);

export {routerUser};