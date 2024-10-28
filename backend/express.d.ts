// src/types/express.d.ts

import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    uid?: string;
    role?: string;
    email?: string;
  }
}
