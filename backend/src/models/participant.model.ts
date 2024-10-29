import mongoose, { Schema, model, connect } from 'mongoose';
import { IParticipant } from '../interface/index.interface';

const  ParticipantSchema = new Schema<IParticipant>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  //createdAt :{type:Date,default:Date.now},
  createdBy:{type:String},
  //modifiedAt:{type:Date,default:Date.now},
  modifiedBy:{type:String}
},{timestamps:true})

const Participant = mongoose.model<IParticipant>('Participant', ParticipantSchema);

 
export { Participant };