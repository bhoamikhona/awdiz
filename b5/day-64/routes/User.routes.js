import { Router } from "express";
import { Login, Register } from "../controllers/User.controllers.js";
import { Cart } from "../controllers/Cart.controllers.js";
import { Payment } from "../controllers/Payment.controllers.js";

const router = Router();

router.get("/login", Login);
router.get("/register", Register);
router.get("/get-cart-products", Cart);
router.get("/make-payment", Payment);

export default router;
