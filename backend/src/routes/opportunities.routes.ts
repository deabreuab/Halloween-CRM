import express, { Router } from 'express';
import { createOpportunityHandler } from '../controllers/opportunities.controllers';

const opportunitiesRouter: Router = express.Router();

opportunitiesRouter.post('/', createOpportunityHandler);

export { opportunitiesRouter };