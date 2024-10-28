import mongoose, { Schema, model, connect } from 'mongoose';


interface IParticipant {
    email:string;
    name:string;
    createdAt: Date; //creado en (momento-fecha)
    createdBy:string; // creado por (persona)
    modifiedAt?:Date; // modificado en (momento-fecha)
    modifiedBy?:string; // modificado por (persona)
}


const  ParticipantSchema = new Schema<IParticipant>({
    email: { type: String, required: true },
    name: { type: String, required: true },
    //createdAt :{type:Date,default:Date.now},
    createdBy:{type:String},
    //modifiedAt:{type:Date,default:Date.now},
    modifiedBy:{type:String}
},{timestamps:true})


ParticipantSchema.pre('save',function(next){
    if(!this.modifiedAt){
        this.modifiedAt = new Date();
    }
    next();
})

const Participant = mongoose.model<IParticipant>('Participant',ParticipantSchema);
 
export default Participant;