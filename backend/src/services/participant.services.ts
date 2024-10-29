// src/services/participant.service.ts
import { Participant } from "../models/participant.model";

const createParticipantService = async (email: string, name: string, createdBy: string) => {
    const newParticipant = await Participant.create({ email, name, createdBy });
    return newParticipant;
};

const getParticipantsService = async () => {
    return await Participant.find();
};

const getParticipantByIdService = async (id: string) => {
    return await Participant.findById(id);
};

const updateParticipantService = async (id: string, updateData: any) => {
    return await Participant.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteParticipantService = async (id: string) => {
    return await Participant.findByIdAndDelete(id);
};

export {
    createParticipantService,
    getParticipantsService,
    getParticipantByIdService,
    updateParticipantService,
    deleteParticipantService
};
