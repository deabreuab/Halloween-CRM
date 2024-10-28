export interface IParticipant {
  email:string;
  name:string;
  createdAt: Date; //creado en (momento-fecha)
  createdBy:string; // creado por (persona)
  modifiedAt?:Date; // modificado en (momento-fecha)
  modifiedBy?:string; // modificado por (persona)
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  photo: string;
  phone: string;
  password: string;
  company: string;
  role: 'admin' | 'collaborator';
  createdAt: Date; 
  createdBy:string;
  modifiedAt?:Date;
  modifiedBy?:string;
}

export interface IOpportunities {
  photo: string;
  description: string;
  type: string;
  user_id: object;
  status: 'new' | 'in_progress' | 'closed';
  start_date: Date;
  end_date: Date;
} 