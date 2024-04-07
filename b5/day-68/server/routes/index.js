import { Router } from "express";
import ProductRoutes from "./ProductRoutes.js";

const router = Router();

router.use("/product", ProductRoutes);

export default router;
