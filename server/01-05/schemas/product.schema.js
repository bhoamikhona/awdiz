import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
  tags: [String],
});

const ProductSchema2 = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required().min(10).max(3000),
  tags: Joi.array().items(Joi.string()).required().min(1),
});

const ProductSchema = mongoose.model("Product", productSchema);
// export default ProductSchema;
export { ProductSchema, ProductSchema2 };
