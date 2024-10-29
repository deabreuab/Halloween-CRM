import express, { Router } from 'express';
import { createTaskHandler, getTasksHandler, getTasksByOpportunityHandler, updateTaskHandler, deleteTaskHandler } from '../controllers/tasks.controllers';

const tasksRouter: Router = express.Router();

tasksRouter.post('/', createTaskHandler);
tasksRouter.get('/', getTasksHandler)
tasksRouter.get('/opportunity/:opportunityId', getTasksByOpportunityHandler)
tasksRouter.put('/:id', updateTaskHandler)
tasksRouter.delete('/:id', deleteTaskHandler)