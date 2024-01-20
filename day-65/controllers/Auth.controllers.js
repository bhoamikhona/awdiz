import UserSchema from "../modals/User.schema.js";

export const Login = function (req, res) {
  return res.send("Login");
};

export const Register = function (req, res) {
  return res.send("Register");
};

export const getOwnData = function (req, res) {
  const { userId } = req.body;
  return res.send(userId);
};
