import ProductSchema from "../models/ProductSchema.js";

export const addProduct = async function (req, res) {
  try {
    const { productName, quantity, price, image, category } = req.body;

    const product = new ProductSchema({
      productName,
      quantity,
      price,
      image,
      category,
    });

    await product.save();

    return res.status(201).json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, success: false });
  }
};
