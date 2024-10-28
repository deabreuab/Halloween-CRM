import mongoose from "mongoose";

export interface IParticipant {
  email:string;
  name:string;
  createdAt: Date; //creado en (momento-fecha)
  createdBy:string; // creado por (persona)
  modifiedAt?:Date; // modificado en (momento-fecha)
  modifiedBy?:string; // modificado por (persona)
}

export interface IUser {
  // id?: number;
  _id?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  photo: string;
  phone: string;
  password: string;
  company: string;
  role: 'admin' | 'collaborator';
  // createdAt?: Date; 
  createdBy?:string;
  modifiedAt?:Date;
  modifiedBy?:string;
}