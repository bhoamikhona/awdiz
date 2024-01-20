import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  number: Number,
  favoriteFruits: [String],
});

export default mongoose.model("User", userSchema);
