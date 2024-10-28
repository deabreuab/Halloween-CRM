import mongoose, { Schema, Model, HydratedDocument, model } from "mongoose"
import { IUser } from "../interface/index.interface";

type UserModel = Model<IUser> 

const userSchema = new Schema<IUser, UserModel>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  photo: { type: String, default: 'default_photo.jpg' },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const Users: UserModel = mongoose.model<IUser, UserModel>('Users', userSchema)

const user: HydratedDocument<IUser> = new Users({
  name: 'John Doe',
  email: 'john.doe@example.com',
  photo: 'john_doe.jpg',
  phone: '1234567890',
  password: 'password123',
  company: 'ABC Corporation',
  role: 'admin'
})

export { user };