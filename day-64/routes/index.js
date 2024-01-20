import { Router } from "express";
import UserRoutes from "./User.routes.js";
import PaymentRoutes from "./User.routes.js";
import MakePaymentRoutes from "./User.routes.js";

const router = Router();

router.use("/auth", UserRoutes);
router.use("/cart", PaymentRoutes);
router.use("/payment", MakePaymentRoutes);

export default router;
