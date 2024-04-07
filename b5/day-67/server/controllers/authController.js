const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// register endpoint
const registerUser = async function (req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // check if name was entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    // check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be atleast 6 characters long",
      });
    }

    // check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.json({
        error: "Confirm Password should match Password",
      });
    }

    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already in use",
      });
    }

    const hashedPassword = await hashPassword(password);
    // const hashedConfirmPassword = await hashPassword(confirmPassword);

    // create a user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      // hashedConfirmPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// login endpoint
const loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check if passwords match
    const match = await comparePassword(password, user.password);

    if (match) {
      // res.json("passwords match");
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        function (error, token) {
          if (error) throw error;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "Incorrect Password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = function (req, res) {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, function (error, user) {
      if (error) throw error;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = { test, registerUser, loginUser, getProfile };
