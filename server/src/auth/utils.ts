import { UserPublic } from "./auth.types";
import jwt from "jsonwebtoken";

export const createJWT = (payload: UserPublic): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
  return token;
};
