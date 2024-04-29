import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AllRoutes from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
dotenv.config();
app.use(cookieParser());

// healthcheck
app.get("/", (req, res) => res.send("Working"));

app.use("/api/v1", AllRoutes);

// connecting mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App started listening on port 8000"));
