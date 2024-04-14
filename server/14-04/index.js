import express from "express";
import AllRoutes from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Working"));

app.use("/api/v1", AllRoutes);

app.listen(8000, () => console.log("App started listening on port 8000"));
