import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("working"));

app.post("/register", function (req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.send("All fields are required");
    }

    if (password !== confirmPassword) {
      return res.send("Password and Confirm Password do not match");
    }

    // TODO: Store data in MongoDB

    return res.send("Registration successful");
  } catch (error) {
    return res.send(error);
  }
});

app.listen(8000, () => console.log(`App started listening on port 8000`));
