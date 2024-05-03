import UserSchema from "../models/user.schema.js";
import {
  comparePassword,
  hashPassword,
  jsonGenerate,
} from "../utils/helpers.js";
import { StatusCode } from "../utils/constants.js";
import jwt from "jsonwebtoken";

export const Register = async function (req, res) {
  const { name, email, password, confirmPassword } = req.body;

  // Checking if all fields are filled
  if (!name || !email || !password || !confirmPassword) {
    return res.json(
      jsonGenerate(
        false,
        StatusCode.UNPROCESSABLE_ENTITY,
        "All fields are required"
      )
    );
  }

  // Checking if password and confirm password match
  if (password !== confirmPassword) {
    return res.json(
      jsonGenerate(
        false,
        StatusCode.UNPROCESSABLE_ENTITY,
        "Password and Confirm Password must match"
      )
    );
  }

  // Checking if user already exists
  const exists = await UserSchema.findOne({ email });
  if (exists) {
    return res.json(
      jsonGenerate(
        false,
        StatusCode.UNPROCESSABLE_ENTITY,
        "This email is already in use, try another one."
      )
    );
  }

  // hashing password
  const hashedPassword = await hashPassword(password);

  try {
    const user = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(
      jsonGenerate(true, StatusCode.SUCCESS, "Registration Successful", user)
    );
  } catch (error) {
    console.log(error);
    return res.json(
      false,
      StatusCode.UNPROCESSABLE_ENTITY,
      "Something went wrong.",
      error
    );
  }
};

export const Login = async function (req, res) {
  const { email, password } = req.body;

  // Checking if all fields are filled
  if (!email || !password) {
    return res.json(
      jsonGenerate(
        false,
        StatusCode.UNPROCESSABLE_ENTITY,
        "All fields are required."
      )
    );
  }

  // Checking if the email exists in database
  const user = await UserSchema.findOne({ email });

  // If the email does not exist:
  if (!user) {
    return res.json(
      jsonGenerate(false, StatusCode.UNPROCESSABLE_ENTITY, "No user found.")
    );
  }

  // Compare passwords
  const match = await comparePassword(password, user.password);

  // if the passwords do not match:
  if (!match) {
    return res.json(
      jsonGenerate(false, StatusCode.UNPROCESSABLE_ENTITY, "Incorrect Password")
    );
  }

  // if the passwords from user input and database match:
  // Login successful and create a token
  if (match) {
    // create a jwt token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10s",
    });

    // Set the token as a cookie in the response
    res.cookie("token", token, { httpOnly: true, maxAge: 10000 });

    return res.json(
      jsonGenerate(true, StatusCode.SUCCESS, "Login Successful", user)
    );
  }

  try {
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(
        false,
        stacod.UNPROCESSABLE_ENTITY,
        "Something went wrong.",
        error
      )
    );
  }
};

export const verifyUser = async function (req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ success: false, message: "No token found." });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong.",
      error,
    });
  }
};

export const ValidateToken = async function (req, res) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ success: false, message: "No token found." });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong", error });
  }

  // return res.json({ success: true, message: "authorized" });
};
