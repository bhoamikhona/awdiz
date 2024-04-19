import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  age: Number,
  phone: Number,
  location: String,
});

const UserSchema = mongoose.model("User", userSchema);
export default UserSchema;
