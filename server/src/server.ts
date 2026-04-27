import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { textsRouter } from "@/texts";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(textsRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
