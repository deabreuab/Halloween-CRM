import type { RequestHandler } from "express";
import { createAnOpportunity } from "../services/opportunities.services";

const createOpportunityHandler: RequestHandler = async (req, res) => {
    const { photo, description, type, user_id, start_date, end_date, createBy, modifiedBy } = req.body;

    try {
        await createAnOpportunity(photo, description, type, user_id, start_date, end_date, createBy, modifiedBy);
        res.status(201).json({ message: "Opportunidad creada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la oportunidad", error });
    }
}

export { createOpportunityHandler } 