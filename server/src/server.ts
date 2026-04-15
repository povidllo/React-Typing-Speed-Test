import exporess from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = exporess();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
