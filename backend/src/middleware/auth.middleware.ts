import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { DecodedToken } from "../interface/index.interface";

// Middleware principal para verificar el token
export const authMiddleware = (secret: string) => (req: Request, resp: Response, next: NextFunction): void | Response => {
    try {
      const { authorization } = req.headers;
  
      if (!authorization) {
        return next();
      }
  
      const [type, token] = authorization.split(" ");
      if (type.toLowerCase() !== "bearer" || !token) {
        return next();
      }
  
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return next();  // Puedes responder aquí con un estado 403, según lo que prefieras
        }
  
        const decodedToken = decoded as DecodedToken;
        req.uid = decodedToken._id;
        req.role = decodedToken.role;
        req.email = decodedToken.email;
        next();
      });
    } catch (error) {
      resp.status(400).json({ message: "Error de token" });
    }
  };
  
  // Función auxiliar para verificar si el usuario está autenticado
  export const isAuthenticated = (req: Request): boolean => !!req.uid;
  
  // Función auxiliar para verificar si el usuario es administrador
  export const isAdmin = (req: Request): boolean => req.role === "admin";
  
  // Middleware para requerir autenticación
  export const requireAuth = (req: Request, resp: Response, next: NextFunction): void | Response => {
    if (!isAuthenticated(req)) {
      return resp.status(401).json({ message: "No autenticado" });
    }
    next();
  };