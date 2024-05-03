import { comparePassword, hashPassword } from "../Utils/auth.js";
import UserSchema from "../models/user.schema.js";
import jwt from "jsonwebtoken";

export const Register = async function (req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name) return res.json({ success: false, message: "Name is required" });

    if (!password || password.length < 6)
      return res.json({
        success: false,
        message:
          "Password is required and should be at least 6 characters long",
      });

    if (password !== confirmPassword)
      return res.json({
        success: false,
        message: "Password and Confirm Password should match",
      });

    const exist = await UserSchema.findOne({ email });

    if (exist)
      return res.json({
        success: false,
        message: "Email already exists, try another one",
      });

    const hashedPassword = await hashPassword(password);

    const user = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json({
      success: true,
      user,
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error, message: "Something went wrong" });
  }
};

export const Login = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    // check if user exists
    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "No user found",
      });
    }

    const match = await comparePassword(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "10000", // set expiration time to 10 seconds
      });
      console.log(token);
      res.cookie("token", token);

      return res.json({
        success: true,
        message: "Login Successful",
        userData: user,
      });
    }
    if (!match) {
      res.json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const validateToken = async function (req, res) {
  try {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      return res.json({
        success: false,
        message: "Token not found",
      });
    }

    const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedData);

    if (!decodedData.id) {
      return res.json({
        success: false,
        message: "Token is expired",
      });
    }

    const user = await UserSchema.findById(decodedData.id);

    console.log(user);

    if (!user) {
      return res.json({ success: false, message: "Token is not valid" });
    }

    return res.json({ success: true, user });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.json({
        success: false,
        message: "Token is expired",
        expired: true,
      });
    }

    console.log(error);
    return res.json({ error, success: false });
  }
};
