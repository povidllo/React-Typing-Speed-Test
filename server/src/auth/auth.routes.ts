import { Router } from "express";
import { authLogin, authRegister } from "./auth.controller";

const router = Router();

router.post("/auth/registration", authRegister);
router.post("/auth/login", authLogin);

export default router;
