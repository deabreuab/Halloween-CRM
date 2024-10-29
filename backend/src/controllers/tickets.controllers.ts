import type { RequestHandler } from "express";
import { createATicket } from "../services/tickets.services";
import { Types } from "mongoose";

const createTicketHandler: RequestHandler = async (req, res) => {
    const participantId = new Types.ObjectId(req.params.participant_id as string);
    const opportunityId = new Types.ObjectId(req.params.opportunity_id as string);
    const { quantity } = req.body;

    try {
        const purchasedTicket = await createATicket(opportunityId, quantity, participantId);
        res.status(201).json({ message: "Ticket creado con éxito", purchasedTicket, quantity });
    } catch (error) {
        console.error("Error creando ticket:", error);
        res.status(500).json({ message: "Error creando ticket: Error desconocido" });
    }
};

export { createTicketHandler };