import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ProductSchema, ProductSchema2 } from "./schemas/product.schema.js";
import UserSchema from "./schemas/user.schema.js";
import bcrypt from "bcrypt";

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => res.send("Working"));

const hashPassword = function (password) {
  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(12, function (err, salt) {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

app.post("/register", async function (req, res) {
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

    return res.json({
      success: true,
      user,
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error, message: "Something went wrong" });
  }
});

app.post("/add-product", async function (req, res) {
  try {
    const { name, category, price, quantity, tags, userId } = req.body;

    if (!name || !category || !price || !quantity || !tags || !userId) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newProduct = new ProductSchema({
      name: name,
      category: category,
      price: price,
      quantity: quantity,
      tags: tags,
      user: userId,
    });

    await newProduct.save();

    return res.json({ sucess: true, message: "Product successfully stored." });
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong", error });
  }
});

// app.post("/add-product", async function (req, res) {
//   try {
//     const { error, value } = ProductSchema2.validate(req.body);

//     if (error) {
//       return res
//         .status(400)
//         .json({ success: false, message: error.details[0].message });
//     }

//     const { name, category, price, quantity, tags } = value;

//     const newProduct = new ProductSchema({
//       name,
//       category,
//       price,
//       quantity,
//       tags,
//     });

//     await newProduct.save();

//     return res.json({ success: true, message: "Product successfully stored." });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, message: "Something went wrong", error });
//   }
// });

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

app.post("/get-products-by-user", async function (req, res) {
  try {
    const { userId } = req.body;
    const products = await ProductSchema.find({ user: userId }).populate(
      "user"
    );
    res.send(products);
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App started listening at port 8000"));
