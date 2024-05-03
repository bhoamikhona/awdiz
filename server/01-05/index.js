import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductSchema from "./schemas/product.schema.js";

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => res.send("Working"));

app.post("/add-product", async function (req, res) {
  try {
    const { name, category, price, quantity } = req.body;

    if (!name || !category || !price || !quantity) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newProduct = new ProductSchema({
      name: name,
      category: category,
      price: price,
      quantity: quantity,
    });

    await newProduct.save();

    return res.json({ sucess: true, message: "Product successfully stored." });
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong", error });
  }
});

app.get("/get-product", async function (req, res) {
  try {
    const pipeline = [
      { $match: { category: "Electronics", price: { $gt: 1000 } } },
      {
        $group: {
          _id: "$product",
          totalQuantity: { $sum: "$quantity" },
          totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ];

    const aggResult = await ProductSchema.aggregate(pipeline);

    return res.json({
      success: true,
      message: "Products aggregated",
      data: aggResult,
    });
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong", error });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App started listening at port 8000"));
