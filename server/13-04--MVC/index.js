import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Register } from "./Controllers/user.controller.js";

const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => res.send("Working"));

app.post("/register", Register);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log(`App started listening on port 8000`));
