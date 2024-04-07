import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AllRoutes from "./routes/index.js";
import cors from "cors";
import ProductSchema from "./models/ProductSchema.js";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

app.get("/", function (req, res) {
  res.send("welcome");
});

app.use("/", AllRoutes);

app.get("/all-products", function (req, res) {
  ProductSchema.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log(`App started listening on port 8000`));
