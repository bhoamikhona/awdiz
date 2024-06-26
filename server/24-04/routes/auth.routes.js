import { Router } from "express";
import {
  Register,
  Login,
  validateToken,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", validateToken);

export default router;
