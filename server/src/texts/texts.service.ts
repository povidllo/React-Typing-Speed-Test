import { TextLanguage, TextLengthType, TextType } from "./texts.types";
import { pool } from "@/db";

interface GetTextProps {
  language?: TextLanguage;
  lengthType?: TextLengthType;
}

export const getText = async ({
  language = "ru",
  lengthType = "medium",
}: GetTextProps): Promise<TextType | null> => {
  const result = await pool.query<TextType>(
    `SELECT 
      text_id as id,
      text_content as content,
      text_language as language,
      text_length_type as "lengthType"
    FROM texts 
    WHERE text_language = $1 
      AND text_length_type = $2 
    ORDER BY RANDOM() 
    LIMIT 1;`,
    [language, lengthType],
  );
  console.log(result.rows[0]);

  return result.rows[0] ?? null;
};
