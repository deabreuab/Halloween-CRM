import mongoose, { Schema } from "mongoose";
import { ITickets } from "../interface/index.interface";

const ticketsSchema = new Schema<ITickets>({
    participant_id: { type: Schema.Types.ObjectId, required: true },
    opportunity_id: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true }
    },{ timestamps: true });

    const Tickets = mongoose.model<ITickets>('Tickets', ticketsSchema);

    export { Tickets };