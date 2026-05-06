import { pool } from "@/db";
import { UserResults, UserResultsBody } from "./results.types";
import { TextType } from "@/texts/texts.types";

type ResponseType = Omit<UserResults & TextType, "text">;

export const getUserResults = async (
  userId: number,
): Promise<UserResults[]> => {
  const result = await pool.query<ResponseType>(
    `SELECT 
      r.result_id as "resultId",
      r.user_id as "userId", 
      r.text_id as "textId", 
      r.cpm, r.wpm, 
      r.accuracy, 
      r.errors, 
      r.type_time as "time", 
      t.text_content as "content",
      t.text_language as "language",
      t.text_length_type as "lengthType"
   FROM results r 
   JOIN texts t ON r.text_id = t.text_id  
   WHERE user_id=$1`,
    [userId],
  );

  const results: UserResults[] = [];

  for (let row of result.rows) {
    const text: TextType = {
      content: row.content,
      textId: row.textId,
      language: row.language,
      lengthType: row.lengthType,
    };
    const userResult: UserResults = {
      userId: row.userId,
      accuracy: row.accuracy,
      cpm: row.cpm,
      errors: row.errors,
      resultId: row.resultId,
      time: row.time,
      wpm: row.wpm,
      text: text,
    };
    results.push(userResult);
  }

  return results;
};

export const setUserResults = async (results: UserResultsBody) => {
  console.log("set");

  const response = await pool.query(
    `INSERT INTO results 
      (user_id, text_id, cpm, wpm, accuracy, errors, type_time)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *;`,
    [
      results.userId,
      results.textId,
      results.cpm,
      results.wpm,
      results.accuracy,
      results.errors,
      results.time,
    ],
  );

  console.log("set2");
  const resultsId: number = response.rows[0].result_id;

  const userResults = getUserResultsWithResultId(results.userId, resultsId);

  return userResults;
};

export const getUserResultsWithResultId = async (
  userId: number,
  resultId: number,
): Promise<UserResults> => {
  const result = await pool.query<ResponseType>(
    `SELECT 
      r.result_id as "resultId",
      r.user_id as "userId", 
      r.text_id as "textId", 
      r.cpm, r.wpm, 
      r.accuracy, 
      r.errors, 
      r.type_time as "time", 
      t.text_content as "content",
      t.text_language as "language",
      t.text_length_type as "lengthType"
   FROM results r 
   JOIN texts t ON r.text_id = t.text_id  
   WHERE user_id=$1 AND r.result_id=$2`,
    [userId, resultId],
  );

  const row = result.rows[0];
  if (!row || result.rowCount !== 1) {
    throw new Error(
      `Не удалось получить результаты с resultId = ${resultId} пользователя с userId = ${userId}`,
    );
  }
  const text: TextType = {
    content: row.content,
    textId: row.textId,
    language: row.language,
    lengthType: row.lengthType,
  };
  const userResult: UserResults = {
    userId: row.userId,
    accuracy: row.accuracy,
    cpm: row.cpm,
    errors: row.errors,
    resultId: row.resultId,
    time: row.time,
    wpm: row.wpm,
    text: text,
  };

  return userResult;
};
