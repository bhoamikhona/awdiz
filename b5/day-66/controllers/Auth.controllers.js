import UserSchema from "../modal/User.schema.js";

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.send("All fields are required");
  }

  if (password !== confirmPassword) {
    return res.send("Password & Confirm Password do not match");
  }

  const isEmailExist = await UserSchema.find({ email: email });

  if (isEmailExist.length) {
    return res.send("Email already exists");
  }

  const user = new UserSchema({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  await user.save();

  return res.send(`User successfully stored in database`);
};
