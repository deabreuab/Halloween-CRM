import type { RequestHandler } from "express";
import { createAnOpportunity, getOpportunities, getAnOpportunity, updateAnOpportunity, deleteAnOpportunity } from "../services/opportunities.services";

const createOpportunityHandler: RequestHandler = async (req, res) => {
    const { photo, description, type, user_id, start_date, end_date, createBy, modifiedBy } = req.body;

    try {
        const createdOpportunity = await createAnOpportunity(photo, description, type, user_id, start_date, end_date, createBy, modifiedBy);
        res.status(201).json({ message: "Opportunidad creada con éxito", created: createdOpportunity});
    } catch (error) {
        res.status(500).json({ message: "Error al crear la oportunidad", error });
    }
}

const updateOpportunityHandler: RequestHandler = async (req, res) =>{
    const id = req.params.id as string;
    const { photo, description, type, start_date, end_date, modifiedBy } = req.body;

    try {
        const updatedOpportunity = await updateAnOpportunity(id, photo, description, type, start_date, end_date, modifiedBy)
        res.status(200).json({ message: "Oportunidad actualizada con éxito", updatedOpportunity: updatedOpportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la oportunidad", error }); 
    }
}

const getOpportunitiesHandler: RequestHandler = async (req, res) => {
    try {
        const opportunities = await getOpportunities();
        res.status(200).json({ message: "Oportunidades obtenidas con éxito", opportunities });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las oportunidades", error });
    }
}

const getOpportunityHandler: RequestHandler = async (req, res) => {
    const id = req.params.id as string;

    try {
        const opportunity = await getAnOpportunity(id);
        res.status(200).json({ message: "Oportunidad obtenida con éxito", opportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la oportunidad", error });
    }
}


const deleteOpportunityHandler: RequestHandler = async (req, res) => {
    const id = req.params.id as string;

    try {
       const deletedOpportunity = await deleteAnOpportunity(id);
        res.status(200).json({ message: "Oportunidad eliminada con éxito", delete: deletedOpportunity });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la oportunidad", error });
    }
}

export { createOpportunityHandler, updateOpportunityHandler, getOpportunitiesHandler, getOpportunityHandler, deleteOpportunityHandler } 