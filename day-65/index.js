import express from "express";
import { Login } from "./controllers/Auth.controllers.js";
import AllRoutes from "./Routes/index.js";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  return res.send("Welcome");
});

app.use("/api/v1", AllRoutes);

app.listen(8000, function (req, res) {
  console.log(`App started on port 8000`);
});
