import { Request, Response } from "express";
import {
  GetResultsBestResponsesType,
  GetResultsQueries,
  GetResultsResponsesType,
  PostResultsResponsesType,
  UserResults,
  UserResultsBody,
} from "./results.types";
import { AuthRequest } from "@/auth/auth.types";
import {
  getBestResultsBy,
  getUserResults,
  setUserResults,
} from "./results.service";

export const getResults = async (
  req: AuthRequest<{}, any, any, GetResultsQueries>,
  res: Response<GetResultsResponsesType>,
) => {
  const user = req.user!;
  const length = Number(req.query?.length ?? 10);
  const offset = Number(req.query?.offset ?? 0);
  try {
    const result: UserResults[] = await getUserResults(
      user.userId,
      length,
      offset,
    );
    console.log(result);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: "Internal error" });
  }
};

export const postResults = async (
  req: AuthRequest<{}, any, UserResultsBody, any>,
  res: Response<PostResultsResponsesType>,
) => {
  const user = req.user!;
  const userResults: UserResultsBody = req.body;
  console.log("post");
  try {
    console.log(userResults);
    const returnedUserResults: UserResults = await setUserResults(
      user.userId,
      userResults,
    );

    return res.status(201).json(returnedUserResults);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error" });
  }
};

export const getBestResults = async (
  req: AuthRequest<{}, any, any, { by: "cpm" | "wpm" }>,
  res: Response<GetResultsBestResponsesType>,
) => {
  const user = req.user!;
  const { by } = req.query;
  try {
    const result: UserResults = await getBestResultsBy(user.userId, by);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error" });
  }
};
