import express, { Router } from 'express';
import { createTicketHandler } from '../controllers/tickets.controllers';


const ticketRouter: Router = express.Router();

ticketRouter.post('/:participant_id/:opportunity_id', createTicketHandler);

export { ticketRouter };