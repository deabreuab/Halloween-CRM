import express, { Router } from 'express';
import { createUser, getUser, getUserById, loginUser, updateUser, deleteUser } from '../controllers/user.controller';

const routerUser: Router = express.Router();

// const { isAdmin } = require('../middleware/auth.middleware');

routerUser.post('/', createUser);
routerUser.get('/',  getUser);
routerUser.get('/:id', getUserById);
routerUser.post('/login', loginUser);
routerUser.put('/:id', updateUser);
routerUser.delete('/:id', deleteUser);

export {routerUser};