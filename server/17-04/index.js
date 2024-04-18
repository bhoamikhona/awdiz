import express from "express";
import morgan from "morgan";
import allRoutes from "./routes/index.js";
import { isValidToken } from "./middlewares/user.middlwares.js";

const app = express();

app.use(express.json());

app.use(morgan("combined"));

// middleware
/* 
app.use(function (req, res, next) {
  const { isCompletedAssignment } = req.body;
  if (isCompletedAssignment === "true") {
    next();
  } else {
    return res.send("Please complete the assignment");
  }
});
 */
app.use(function (error, req, res, next) {
  if (error) res.send(error);
  else next();
});

app.post("/", isValidToken, (req, res) => res.send("Working"));

app.post("/hello", function (req, res) {
  return res.send("Hello");
});

app.use("/api/v1", allRoutes);

app.listen(8000, () => console.log(`App started listening on port 8000`));
