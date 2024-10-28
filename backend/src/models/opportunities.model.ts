import mongoose, { Schema } from "mongoose";
import { IOpportunities } from "../interface/index.interface";
  
const opportunitiesSchema = new Schema<IOpportunities>({
    photo: { type: String, default: 'default_photo.jpg' },
    description: { type: String, required: true },
    type: { type: String, required: true},
    user_id: {  type: Schema.Types.ObjectId, required: true },
    status: { type: String, enum: ['new', 'in_progress', 'closed'], default: 'new' },
    start_date: { type: Date, required: true, default: Date.now },
    end_date: { type: Date, required: true },
    createBy: { type: String, required: true, default: 'system' },
    modifiedBy: { type: String },
  },{timestamps:true});
  
  const Opportunities = mongoose.model<IOpportunities>('Opportunities', opportunitiesSchema);

  export { Opportunities };