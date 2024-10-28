import express, { Router } from 'express';
import { createUser } from '../controllers/user.controller';

const routerUser: Router = express.Router();

routerUser.post('/', createUser);

export {routerUser};