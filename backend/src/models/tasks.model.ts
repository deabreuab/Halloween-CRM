import mongoose, { Schema } from "mongoose";
import { Itasks} from "../interface/index.interface";
  
const tasksSchema = new Schema<Itasks>({
    user_id: { type: Schema.Types.ObjectId, required: true},
    opportunity_id: {type: Schema.Types.ObjectId, required: true},
    id:{ type: Schema.Types.ObjectId},
    title: {type: String, required: true},
    description: {type: String, required:true},
    status: {type: String, enum: ['new', 'in_progress', 'closed'], default: 'new' },
    due_date: {type: Date, required: true},
    assigned_date: {type: Date, default: Date.now},
    createdBy:{ type: String, required: true },
    modifiedAt:{type: Date, required: true },
    modifiedBy: { type: String },
},{ timestamps: true });
  
  const Tasks = mongoose.model<Itasks>('Tasks', tasksSchema);

  export { Tasks };