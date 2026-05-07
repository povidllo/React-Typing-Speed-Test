import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, UserPublicDB } from "./auth.types";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  console.log("Middleware");

  const authHeader = req.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token!, process.env.JWT_SECRET!) as UserPublicDB;

    req.user = payload;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
