import express from "express";
import cors from "cors";
import "dotenv/config";

import { textsRouter } from "@/texts";
import { authRouter } from "@/auth";
import { resultsRouter } from "@/results";
import { pool } from "./db";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(textsRouter);
app.use(authRouter);
app.use(resultsRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
