import express from "express";
import AllRoutes from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

// converts json to javascript
app.use(express.json());

dotenv.config();

app.get("/", function (req, res) {
  res.send(`Welcome`);
});

app.use("/api/v1", AllRoutes);

// connecting to mongodb using mongoose
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected"));

app.listen(8000, function () {
  console.log(`App started listening on Port 8000`);
});
