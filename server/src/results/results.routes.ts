import { authMiddleware } from "@/auth";
import { Router } from "express";
import { getResults, postResults, getBestResults } from "./results.controller";

const router = Router();

router.get("/results", authMiddleware, getResults);
router.post("/results", authMiddleware, postResults);
router.get("/results/best", authMiddleware, getBestResults);

export default router;
