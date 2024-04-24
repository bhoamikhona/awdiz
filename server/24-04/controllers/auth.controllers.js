import { comparePassword, hashPassword } from "../Utils/auth.js";
import UserSchema from "../models/user.schema.js";

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

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error: error });
  }
};

export const Login = async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email });

    if (!user) return res.json({ success: false, message: "No user found" });

    const match = await comparePassword(password, user.password);

    if (match) return res.json({ success: true, message: "Login successful" });
    else return res.json({ success: false, message: "Incorrect password" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error: error });
  }
};
