import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ProductSchema } from "./schemas/product.schema.js";
import { ProductSchema2 } from "./schemas/product.schema.js";

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => res.send("Working"));

// app.post("/add-product", async function (req, res) {
//   try {
//     const { name, category, price, quantity, tags } = req.body;

//     if (!name || !category || !price || !quantity || !tags) {
//       return res.json({ success: false, message: "All fields are required" });
//     }

//     const newProduct = new ProductSchema({
//       name: name,
//       category: category,
//       price: price,
//       quantity: quantity,
//       tags: tags,
//     });

//     await newProduct.save();

//     return res.json({ sucess: true, message: "Product successfully stored." });
//   } catch (error) {
//     return res.json({ success: false, message: "Something went wrong", error });
//   }
// });

// Modify the route to use ProductSchema2 for validation
app.post("/add-product", async function (req, res) {
  try {
    const { error, value } = ProductSchema2.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const { name, category, price, quantity, tags } = value;

    const newProduct = new ProductSchema({
      name,
      category,
      price,
      quantity,
      tags,
    });

    await newProduct.save();

    return res.json({ success: true, message: "Product successfully stored." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
});

app.post("/get-product", async function (req, res) {
  try {
    const { category, price } = req.body;

    const pipeline = [
      // { $match: { category: "Electronics", price: { $gt: 1000 } } },
      { $match: { category: category, price: { $gt: Number(price) } } },
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

app.post("/unwind-projecting", async function (req, res) {
  try {
    const aggreatation = [
      { $unwind: "$tags" },
      { $project: { name: 1, price: 1 } },
    ];
    const filteredProducts = await ProductSchema.aggregate(aggreatation);
    console.log(filteredProducts);
    res.send({
      success: true,
      message: "Unwinding and Projecting Successful",
      data: filteredProducts,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong.",
      error,
    });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App started listening at port 8000"));
