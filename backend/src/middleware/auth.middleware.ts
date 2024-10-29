import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { DecodedToken } from "../interface/index.interface";

export const authMiddleware = (req: Request, resp: Response, next: NextFunction): void => {
  try {
    const secretKey = process.env.JWT_SECRET || "secreto";
    console.log(secretKey);
    
    console.log("hola");
    
    const { authorization } = req.headers;
    if (!authorization) return next();

    const [type, token] = authorization.split(" ");
    console.log("🚀 ~ authMiddleware ~ token:", token)
    if (type.toLowerCase() !== "bearer" || !token) return next();

    jwt.verify(token, secretKey, (err, decoded) => {
      // if (err) return next(403);
      if(err){
        console.log(err);
        resp.status(401).json({message: "error del token"});
        return
      }

      const decodedToken = decoded as DecodedToken;
      req.uid = decodedToken._id;
      req.role = decodedToken.role;
      req.email = decodedToken.email;
      console.log("🚀 ~ jwt.verify ~ decodedToken:", decodedToken)      
      next();
    });
  } catch (error) {
    resp.status(400).json({ message: "Error de token" });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  if (req.role === "admin") {
    console.log("🚀 ~ isAdmin ~ req.role:", req.role)
    next();
  } else {
    res.status(401).json({ message: "No autorizado" });
  }
};

export const isCollaborator = (req: Request, res: Response, next: NextFunction): void => {
  if (req.role === "admin" || req.role === "collaborator") {
    next();
  } else {
    res.status(401).json({ message: "No autorizado" });
  }
};