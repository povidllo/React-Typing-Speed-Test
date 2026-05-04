import { getUserByLogin, setNewUser } from "./auth.service";
import {
  AuthBodyType,
  PostLoginResponsesType,
  PostRegisterResponsesType,
  UserAuth,
  UserPublic,
} from "./auth.types";
import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createJWT } from "./utils";

export const authRegister = async (
  req: Request<{}, any, AuthBodyType, any>,
  res: Response<PostRegisterResponsesType>,
) => {
  const { login, password } = req.body;

  console.log(login, password);

  try {
    const user: UserAuth | null = await getUserByLogin(login);

    if (user !== null) {
      console.log("Пользователь уже существует");
      return res.status(409).json({
        error: "Пользователь уже существует",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    const newUser: UserPublic = await setNewUser(login, passwordHash);

    const token = createJWT(newUser);

    console.log(`Пользователь ${login} создан`);

    return res.status(201).json({
      token: token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
};

export const authLogin = async (
  req: Request<{}, any, AuthBodyType, any>,
  res: Response<PostLoginResponsesType>,
) => {
  const { login, password } = req.body;

  try {
    const user: UserAuth | null = await getUserByLogin(login);

    if (!user) {
      return res.status(401).json({
        error: "Неверные данные учетной записи",
      });
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({
        error: "Неверные данные учетной записи",
      });
    }

    const token = createJWT({
      userId: user.userId,
      userLogin: user.userLogin,
    });

    return res.status(200).json({
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Внутренняя ошибка сервера",
    });
  }
};
