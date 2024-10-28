import { Request, Response } from "express";
import { Users } from "../models/user.models";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

export const loginUser = async (req: Request, resp: Response): Promise<any> => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return resp.status(400).json({ message: "Correo y contraseña son obligatorios" });
        };
        const findUser = await Users.findOne({email: email}).exec();
        if (!findUser) {
            return resp.status(404).json({ message: "No se encontró el usuario" });
        }
        const loginUser = await comparePassword(password, findUser.password)
        if(!loginUser){
            return resp.status(401).json({ message: "Contraseña incorrecta" });
        }
        if(!process.env.JWT_SECRET){
            return resp.status(401).json({ message: "Variable de entorno JWT_SECRET no configurada" });
        }
        const payload = {
            email: findUser.email,
            role: findUser.role
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRET);
        resp.status(200).json({message: "Acceso verificado", token});
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