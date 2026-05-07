import { Router } from "express";
import { authLogin, authMe, authRegister } from "./auth.controller";
import { authMiddleware } from "./auth.middleware";

const router = Router();

router.post("/auth/registration", authRegister);
router.post("/auth/login", authLogin);
router.get("/auth/me", authMiddleware, authMe);

export default router;
