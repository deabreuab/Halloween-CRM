import { Participant } from "../models/participant.model";
import { Request, Response } from 'express';

const createParticipant = async (req: Request, res: Response) => {

  
try {
    const { email, name, createdBy } = req.body; 
    console.log("Request body:", req.body);
    const newParticipant = await Participant.create({
        email,
        name,
        createdBy // Usa createdBy aquí en lugar de name
      });
      await newParticipant.save();
      res.status(201).json({
        message: "Participant created successfully",
        participant: newParticipant,
      });
    } catch (error) {
      console.error("Error creating participant:", error);
      res.status(500).json({
        message: "Error creating participant",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
  
  const getParticipant = async ( req:Request, res:Response ) => {
    try {
      const findParticipant = await Participant.find();
      res.status(200).json({message: "Participantes obtenidos", findParticipant});
  } catch (error) {
      res.status(500).json(error);
  }
};

  const getParticipantById = async (req:Request, res:Response) => {
    //const { id } = req.params;
    const id = req.params.id as string;
    try {
        const participant = await Participant.findById(id);
        if (!participant) {
            return res.status(404).json({ message: "No se encontró el participante" });
        }
        return res.status(200).json(participant)
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }

  };

  const updateParticipant = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const { email, name, createdBy, modifiedBy } = req.body;
    
    try {
      const updatedParticipant = await Participant.findByIdAndUpdate(
        id,
        { email, name, createdBy, modifiedBy, modifiedAt: new Date() }, // Opcional: añade un campo `modifiedAt` en el esquema si deseas registrar la última modificación
        { new: true } // Para devolver el documento actualizado
      );
  
      if (!updatedParticipant) {
        return res.status(404).json({ message: "Participante no encontrado" });
      }
  
      res.status(200).json({
        message: "Participante actualizado con éxito",
        participant: updatedParticipant,
      });
    } catch (error) {
      console.error("Error actualizando participante:", error);
      res.status(500).json({
        message: "Error actualizando participante",
        error: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  };
  
  const deleteParticipant = async (req: Request, res: Response) => {
    const id = req.params.id as string;
  
    try {
      const deletedParticipant = await Participant.findByIdAndDelete(id);
  
      if (!deletedParticipant) {
        return res.status(404).json({ message: "Participante no encontrado" });
      }
  
      res.status(200).json({
        message: "Participante eliminado con éxito",
        participant: deletedParticipant,
      });
    } catch (error) {
      console.error("Error eliminando participante:", error);
      res.status(500).json({
        message: "Error eliminando participante",
        error: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  };
  
  export { createParticipant, getParticipant, getParticipantById, updateParticipant, deleteParticipant };