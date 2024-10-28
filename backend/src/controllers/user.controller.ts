import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
    try {
        res.render('')
    } catch (error) {
       res.status(500).json(error); 
    }
}