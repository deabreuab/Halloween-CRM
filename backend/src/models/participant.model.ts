import mongoose, { Schema, model, connect } from 'mongoose';


interface IParticipant {
    email:string;
    name:string;
    createdBy:string; // creado por (persona)
    modifiedBy?:string; // modificado por (persona)
}


const  ParticipantSchema = new Schema<IParticipant>({
    email: { type: String, required: true },
    name: { type: String, required: true },
    createdBy:{type:String,required: true},
    modifiedBy:{type:String}
},{timestamps:true}) // añade automaticamento createAt y updateAt


const Participant = mongoose.model<IParticipant>('Participant',ParticipantSchema);
 
export default Participant;
