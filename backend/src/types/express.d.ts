// src/types/express.d.ts
import { Request } from "express";
declare module "express-serve-static-core" {
  interface Request {
    uid?: mongoose.Types.ObjectId;
    role?: string;
    email?: string;
  }
}