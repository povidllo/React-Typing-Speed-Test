import { pool } from "@/db";
import { UserAuthDB, UserPublicDB } from "./auth.types";

export const getUserByLogin = async (
  login: string,
): Promise<UserAuthDB | null> => {
  const result = await pool.query<UserAuthDB>(
    `SELECT 
      user_id AS "userId",
      user_login AS "userLogin",
      password_hash AS "passwordHash"
    FROM users 
    WHERE user_login = $1;`,
    [login],
  );

  return result.rows[0] ?? null;
};

export const setNewUser = async (
  login: string,
  password_hash: string,
): Promise<UserPublicDB> => {
  const result = await pool.query<UserPublicDB>(
    `INSERT INTO users (user_login, password_hash)
     VALUES ($1, $2)
     RETURNING 
       user_id as "userId", 
       user_login as "userLogin";`,
    [login, password_hash],
  );

  const user = result.rows[0];

  if (!user) {
    throw new Error("Insert failed");
  }

  return user;
};
