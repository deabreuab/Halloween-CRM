import express, { Router } from 'express';
import { createUser, getUser, getUserById, loginUser, updateUser, deleteUser } from '../controllers/user.controller';
import { isAdmin, requireAuth } from '../middleware/auth.middleware';

const routerUser: Router = express.Router();

routerUser.post('/', createUser);
routerUser.get('/', requireAuth, getUser);
routerUser.get('/:id', getUserById);
routerUser.post('/login', loginUser);
routerUser.put('/:id', isAdmin, updateUser);
routerUser.delete('/:id', deleteUser);


export {routerUser};

