import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { DecodedToken } from "../interface/index.interface";

export const authMiddleware = (secret: string) => (req: Request, resp: Response, next: NextFunction): void => {
  try {
    const secretKey = process.env.JWT_SECRET || "secreto";
    console.log({secret});
    
    console.log("hola");
    
    const { authorization } = req.headers;
    if (!authorization) return next();

    const [type, token] = authorization.split(" ");
    console.log("🚀 ~ authMiddleware ~ token:", token)
    if (type.toLowerCase() !== "bearer" || !token) return next();
    console.log("hola2");

    jwt.verify(token, secretKey, (err, decoded) => {
      // if (err) return next(403);
      if(err){
        console.log(err);
        resp.status(401).json({message: "error del token"});
        return
      }
      console.log("hola3");

      const decodedToken = decoded as DecodedToken;
      (req as any)._id = decodedToken._id;
      (req as any).role = decodedToken.role;
      (req as any).email = decodedToken.email
      console.log("🚀 ~ jwt.verify ~ decodedToken:", decodedToken)      
      next();
    });
  } catch (error) {
    resp.status(400).json({ message: "Error de token" });
  }
};

// Middleware para verificar si el usuario es administrador
export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  if (req.role === "admin") {
    console.log("🚀 ~ isAdmin ~ req.role:", req.role)
    next();
  } else {
    res.status(401).json({ message: "No autorizado" });
  }
};

// // Middleware para requerir autenticación
// export const requireAuth = (req: Request, resp: Response, next: NextFunction): void => {
//   if (!req.uid) {
//     resp.status(401).json({ message: "No autenticado" });
//   } else {
//     next();
//   }
// };