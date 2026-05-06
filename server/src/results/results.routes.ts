import { authMiddleware } from "@/auth";
import { Router } from "express";
import { getResults, postResults } from "./results.controller";

const router = Router();

router.get("/results", authMiddleware, getResults);
router.post("/results", authMiddleware, postResults);

export default router;
