import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ProductSchema, ProductSchema2 } from "./schemas/product.schema.js";
import UserSchema from "./schemas/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

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

const comparePassword = function (password, hashed) {
  return bcrypt.compare(password, hashed);
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

app.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    // check if user exists
    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "No user found",
      });
    }

    const match = await comparePassword(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "10000", // set expiration time to 10 seconds
      });
      console.log(token);
      res.cookie("token", token);

      return res.json({
        success: true,
        message: "Login Successful",
        userData: user,
      });
    }
    if (!match) {
      res.json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
});

app.get("/validate-token", async function (req, res) {
  try {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      return res.json({
        success: false,
        message: "Token not found",
      });
    }

    const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedData);

    if (!decodedData.id) {
      return res.json({
        success: false,
        message: "Token is expired",
      });
    }

    const user = await UserSchema.findById(decodedData.id);

    console.log(user);

    if (!user) {
      return res.json({ success: false, message: "Token is not valid" });
    }

    return res.json({ success: true, user });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.json({
        success: false,
        message: "Token is expired",
        expired: true,
      });
    }

    console.log(error);
    return res.json({ error, success: false });
  }
});

app.post("/add-product", async function (req, res) {
  try {
    const { name, category, price, quantity, tags, img, userId } = req.body;

    if (!name || !category || !price || !quantity || !tags || !img || !userId) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const newProduct = new ProductSchema({
      name: name,
      category: category,
      price: price,
      quantity: quantity,
      tags: tags,
      img: img,
      user: userId,
    });

    await newProduct.save();

    return res.json({ success: true, message: "Product successfully stored." });
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

/* app.post("/get-product", async function (req, res) {
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
}); */

app.get("/get-products", async function (req, res) {
  try {
    const products = await ProductSchema.find({});
    return res.json({ success: true, message: "Successful", products });
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
