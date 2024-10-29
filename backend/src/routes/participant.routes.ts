import { Router } from 'express';
import { createParticipant, getParticipants, getParticipantById, updateParticipant, deleteParticipant } from '../controllers/participants.controller';

const routerParticipant: Router = Router();

routerParticipant.post('/', createParticipant);
routerParticipant.get('/', getParticipants);
routerParticipant.get('/:id', getParticipantById);
routerParticipant.put('/:id', updateParticipant);
routerParticipant.delete('/:id', deleteParticipant);

export { routerParticipant };