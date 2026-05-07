import { UserPublicDB, UserType } from "./auth.types";
import jwt from "jsonwebtoken";

export const createJWT = (payload: UserPublicDB): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
  return token;
};

export const getUserFromToken = (authHeader: string): UserPublicDB => {
  const token = authHeader?.split(" ")[1];
  const payload = jwt.verify(token!, process.env.JWT_SECRET!) as UserPublicDB;
  return payload;
};
