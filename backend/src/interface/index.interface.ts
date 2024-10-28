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

export interface IOpportunities {
  photo: string;
  description: string;
  type: string;
  user_id: mongoose.Types.ObjectId;
  status: 'new' | 'in_progress' | 'closed';
  start_date: Date;
  end_date: Date;
  createBy: string;
  modifiedBy: string;
} 

export interface ITickets {
  participant_id: mongoose.Types.ObjectId,
  opportunity_id: mongoose.Types.ObjectId,
  quantity: Number
}

export interface Itasks{
  user_id: mongoose.Types.ObjectId,
  opportunity_id: mongoose.Types.ObjectId,
  id: mongoose.Types.ObjectId,
  title: string;
  description: string;
  status: string;
  due_date: Date;
  assigned_date: Date;
  createdBy?:string;
  modifiedAt?:Date;
  modifiedBy?:string;
}

