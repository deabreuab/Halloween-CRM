import { Request, Response } from "express";
import { Users } from "../models/user.models";
// import bcrypt from 'bcrypt'


// const encryptedPassword = async (password: string) =>{
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
//   }
//   const comparedPassword = awaitUsers.methods.comparedPassword = async function(password: string){//this hace referencia a userSchema
//     return await bcrypt.compare(password, this.password);
//   }

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phone } = req.body;
        // const encryptedPassword = await Users.schema.methods.encryptedPassword(password);
        // const newUser = new Users({ name, email, password: encryptedPassword, phone });
        const newUser = new Users({name: name, email:email, password: password, phone: phone})
        await newUser.save();
        console.log("��� ~ createUser ~ newUser:", newUser)
        res.status(201).json("creado");
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        res.status(400).json(error);
    }
};

