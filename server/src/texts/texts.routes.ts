import { Router } from "express";
import { getTextsController } from "./texts.controller";

const router = Router();

router.get("/texts", getTextsController);

export default router;
