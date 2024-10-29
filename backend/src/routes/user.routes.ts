import express, { Router } from 'express';
import { createUser, getUser, getUserById, loginUser, updateUser, deleteUser } from '../controllers/user.controller';
import { isAdmin,authMiddleware,isCollaborator } from '../middleware/auth.middleware';

const routerUser: Router = express.Router();

routerUser.post('/',authMiddleware, isAdmin, createUser);
routerUser.get('/', authMiddleware, isCollaborator, getUser);
routerUser.get('/:id', authMiddleware, isCollaborator, getUserById);
routerUser.post('/login', loginUser);
routerUser.put('/:id',authMiddleware, isAdmin, updateUser);
routerUser.delete('/:id',authMiddleware, isAdmin, deleteUser);

export {routerUser};