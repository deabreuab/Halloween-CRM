import express, { Router } from 'express';
import { createOpportunityHandler, deleteOpportunityHandler, getOpportunitiesHandler, getOpportunityHandler, updateOpportunityHandler } from '../controllers/opportunities.controllers';

const opportunitiesRouter: Router = express.Router();

opportunitiesRouter.post('/', createOpportunityHandler);
opportunitiesRouter.get('/', getOpportunitiesHandler) 
opportunitiesRouter.get('/:id', getOpportunityHandler) 
opportunitiesRouter.put('/:id', updateOpportunityHandler)
opportunitiesRouter.delete('/:id', deleteOpportunityHandler)

export { opportunitiesRouter };