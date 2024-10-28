import mongoose, { Schema, Model, HydratedDocument, model } from "mongoose"
import { IUser } from "../interface/index.interface";

type UserModel = Model<IUser> 

const userSchema = new Schema<IUser, UserModel>({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  photo: { type: String, default: 'default_photo.jpg' },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, enum: ['admin', 'collaborator'], default: 'collaborator' },
},{timestamps:true});//SUSTITUYE A CREATEDAT Y UPDATEDAT PARA NO TENER QUE ESTARLOS ACTUALIZANDO

export const Users: UserModel = mongoose.model<IUser, UserModel>('Users', userSchema);//NOMBRE DEL ESQUEMA, Y EL ESQUEMA