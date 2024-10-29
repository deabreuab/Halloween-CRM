import { Router } from 'express';
import { createParticipant, getParticipant, getParticipantById, updateParticipant, deleteParticipant} from '../controllers/participants.controller';

const routerParticipant: Router = Router();

routerParticipant.post('/', createParticipant);
routerParticipant.get('/', getParticipant);
routerParticipant.get('/:id', getParticipantById);
routerParticipant.put('/:id', updateParticipant);
routerParticipant.delete('/:id', deleteParticipant);

export { routerParticipant };