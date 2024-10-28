import { Request, Response } from "express";
import { Users } from "../models/user.models";
import bcrypt from 'bcrypt'

const encryptedPassword = async (password:string) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
const comparePassword = async (password:string, passwordHash:string) =>{
    return await bcrypt.compare(password, passwordHash);
}

export const createUser = async (req: Request, resp: Response) => {
    try {
        const { name, email, password, phone } = req.body;
        const newPassword = await encryptedPassword(password);
        const newUser = new Users({name: name, email:email, password: newPassword, phone: phone})
        await newUser.save();
        resp.status(201).json({message:"Colaborador creado", newUser});
    } catch (error) {
        resp.status(500).json(error);
    }
};

export const loginUser = async (req: Request, resp: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        resp.status(200).json({message: "Acceso verificado"});
    } catch (error) {
        resp.status(500).json({message: "Error del servidor"})
    }
}


export const getUser = async (req: Request, resp: Response) => {
    try {
        const findUser = await Users.find()

        resp.status(200).json({message: "Usuarios obtenidos", findUser});
    } catch (error) {
        resp.status(500).json(error);
    }
}

export const getUserById = async (req: Request, resp: Response): Promise<any> => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            return resp.status(404).json({ message: "No se encontró el usuario" });
        }
    } catch (error) {
        return resp.status(500).json({ message: "Error del servidor" });
    }
}

export const updateUser = async (req: Request, resp: Response) => {}

export const deleteUser = async (req: Request, resp: Response) => {}