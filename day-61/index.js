// .env
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MY_SECRET_KEY);

// express
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.get("/test", (req, res) => {
  res.send("testing...");
});

app.post("/testingpost", (req, res) => {
  console.log(req.body);
  res.send(req.body.name);
});

app.listen("8000", () => {
  console.log("Listening on port 8000");
});
