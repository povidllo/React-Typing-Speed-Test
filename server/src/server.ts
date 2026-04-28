import express from "express";
import cors from "cors";
import "dotenv/config";

import { textsRouter } from "@/texts";
import { pool } from "./db";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(textsRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
