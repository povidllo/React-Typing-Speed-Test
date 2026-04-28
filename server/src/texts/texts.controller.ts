import type { Request, Response } from "express";
import type {
  GetTextsQueries,
  GetTextsResponsesType,
  TextType,
} from "./texts.types";
import { getText } from "./texts.service";

export const getTextsController = async (
  req: Request<{}, any, any, GetTextsQueries>,
  res: Response<GetTextsResponsesType>,
) => {
  const { language, lengthType } = req.query;
  //сделать валидацию!

  const responseText: TextType | null = await getText({ language, lengthType });
  if (!responseText) {
    return res.status(404).json({ error: "Text nout found" });
  }

  res.status(200).json(responseText);
};
