import { Router } from "express";
import {
  Register,
  Login,
  ValidateToken,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", ValidateToken);

export default router;
