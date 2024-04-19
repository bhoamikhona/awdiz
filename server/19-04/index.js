import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserSchema from "./models/user.schema.js";

// creating an instance of express
const app = express();

// middleware
app.use(express.json());

// configuring dotenv
dotenv.config();

// healthcheck
app.get("/", (req, res) => res.send("Working"));

// register users
app.post("/register", async function (req, res) {
  try {
    const { name, email, password, age, phone, location } = req.body;

    if (!name || !email || !password || !age || !phone || !location) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }
    const user = new UserSchema({
      name: name,
      email: email,
      password: password,
      age: age,
      phone: phone,
      location: location,
    });

    console.log("User:", user);
    await user.save();
    return res
      .status(201)
      .json({ success: true, message: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
});

// filtering users
app.get("/filter-users", async function (req, res) {
  try {
    const { age } = req.body;

    // const users = await UserSchema.find(); // return all documents
    // const users = await UserSchema.find({ name: "bhoami" });
    // const users = await UserSchema.find({
    //   name: "bhoami",
    //   email: "bhoami@email.com",
    // });
    // const users = await UserSchema.find({ age: 20 });
    // const users = await UserSchema.find({ age: { $eq: 25 } });
    // const users = await UserSchema.find({ age: { $ne: 20 } });
    // const users = await UserSchema.find({ age: { $gt: 23 } });
    // const users = await UserSchema.find({ age: { $gte: 23 } });
    // const users = await UserSchema.find({ age: { $lt: 23 } });
    // const users = await UserSchema.find({ age: { $lte: 23 } });
    // const users = await UserSchema.find({ age: { $in: [23, 25] } });
    // const users = await UserSchema.find({ age: { $nin: [23, 25] } });
    // const users = await UserSchema.find({ phone: { $exists: true } });
    // const users = await UserSchema.find({
    //   $and: [{ age: { $eq: 30 } }, { location: { $eq: "bangalore" } }],
    // });
    // const users = await UserSchema.find({
    //   $or: [{ age: { $eq: 30 } }, { location: { $eq: "mumbai" } }],
    // });
    // const users = await UserSchema.find({
    //   age: { $not: { $gt: 25 } },
    // });
    // const users = await UserSchema.find({
    //   $nor: [{ age: { $eq: 20 } }, { age: { $eq: 30 } }],
    // });
    // const users = await UserSchema.find({ location: { $exists: true } });
    const users = await UserSchema.find({ phone: { $type: "number" } });

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
});

// connecting mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

// listen
app.listen(8000, () => console.log("App started listening on port 8000"));
