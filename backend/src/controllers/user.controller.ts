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

export const createUser = async (req: Request, resp: Response): Promise<any> => {
    try {
        const regexEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
        const { name, email, password, phone, company, role, photo } = req.body;
        if(!name ||!email ||!password ||!phone){
            return resp.status(400).json({ message: "Nombre, correo electrónico, teléfono, contraseña y compañía son campos obligatorios" });
        };
        if (!regexEmail.test(email)) {
            return resp.status(400).json("Correo electrónico inválido");
        }; 
        const findUser = await Users.findOne({email: email}).exec();
        if (findUser) {
            return resp.status(409).json({ message: "Correo electrónico ya registrado" });
        };
        const newPassword = await encryptedPassword(password);
        const newUser = new Users({name: name, email:email, password: newPassword, phone: phone, company: company, role: role, photo: photo || 'default_photo.jpg'});
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
        resp.status(200).json({message: "Usuario obtenido", user});
    } catch (error) {
        return resp.status(500).json({ message: "Error del servidor" });
    }
}

// export const updateUser = async (req: Request, resp: Response): Promise<any> => {
//     try {
//         const {id} = req.params;
//         const {name, password, phone, company, photo } = req.body;
//         if(!id){
//           return resp.status(400).json({ message: "ID es obligatorio" });
//         }
//         const findUser = await Users.findById(id);
//         if (!findUser) {
//             return resp.status(404).json({ message: "No se encontró el usuario" });
//         }
//         let psw = findUser.password;
//         if(password){
//           psw = await encryptedPassword(password);
//         }
//         const updateUser = await Users.updateOne({_id: id}, {name, password:psw, phone, company, photo})
//         return resp.status(200).json({message: "Usuario actualizado", updateUser});
//     } catch (error) {
//         console.log("🚀 ~ updateUser ~ error:", error)
//         return resp.status(500).json({ message: "Error del servidor", error});
//     }
// }

export const updateUser = async (req: Request, resp: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { name, password, phone, company, photo } = req.body;
        const updateUser = await Users.findByIdAndUpdate(id,
            { 
                name, 
                password: password ? await encryptedPassword(password) : undefined, 
                phone, 
                company, 
                photo 
            }, 
            { new: true }
        );
        
        if (!updateUser) {
            return resp.status(404).json({ message: "No se encontró el usuario" });
        }
        return resp.status(200).json({ message: "Usuario actualizado", updateUser });
    } catch (error) {
        console.log("🚀 ~ updateUser ~ error:", error)
        return resp.status(500).json({ message: "Error del servidor", error});
    }
}

export const deleteUser = async (req: Request, resp: Response): Promise<any> => {
    try {
        const {id} = req.params;
        if(!id){
            return resp.status(400).json({ message: "ID es obligatorio" });
        };
        const findUser = await Users.findById(id);
        if (!findUser) {
            return resp.status(404).json({ message: "No se encontró el usuario" });
        }
        const deleteUser = await Users.deleteOne({_id: id});
        return resp.status(200).json({message: "Usuario eliminado", deleteUser});
    } catch (error) {
        return resp.status(500).json({ message: "Error del servidor", error});
    }
}

// export const deleteUser = async (req: Request, resp: Response): Promise<any> => {
//     try {
//         const { id } = req.params;
//         if (!id) {
//             return resp.status(400).json({ message: "ID es obligatorio" });
//         }
//         const deleteUser = await Users.findOneAndDelete({ _id: id });
//         if (!deleteUser) {
//             return resp.status(404).json({ message: "No se encontró el usuario" });
//         }
//         return resp.status(200).json({ message: "Usuario eliminado", deleteUser });
//     } catch (error) {
//         return resp.status(500).json({ message: "Error del servidor", error });
//     }
// }