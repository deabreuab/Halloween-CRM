import { Tickets } from "../models/tickets.model";
import { Types } from "mongoose"; // Importar Types en lugar de ObjectId

const createATicket = async (opportunity_id: Types.ObjectId, quantity: number, participant_id: Types.ObjectId) => {
    const newTicket = new Tickets({ participant_id, opportunity_id, quantity });
    await newTicket.save();

    console.log('Successfully created opportunity', newTicket);
};

export { createATicket };