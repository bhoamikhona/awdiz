import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserSchema from "./models/user.schema.js";

const app = express();
app.use(express.json());

dotenv.config();

app.get("/", (req, res) => console.log("Working"));

app.post("/register", async function (req, res) {
  try {
    const { name, email, password, age } = req.body;

    if (!name || !email || !password || !age) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }
    const user = new UserSchema({
      name: name,
      email: email,
      password: password,
      age: age,
    });

    console.log("User:", user);
    await user.save();
    return res
      .status(201)
      .json({ success: true, message: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

app.post("/get-users", async function (req, res) {
  try {
    const users = await UserSchema.find({ age: { $eq: 20 } }); // mongoose official documentation

    if (users) {
      console.log(users);
      res
        .status(201)
        .json({ success: true, message: "Users found", users: users });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "No users found with the age of 20" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App started listening on port 8000"));
