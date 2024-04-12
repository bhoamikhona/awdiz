import express from "express";

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Bhoami", email: "bhoami@email.com" },
  { id: 2, name: "Sonal", email: "sonal@email.com" },
  { id: 3, name: "Roshni", email: "roshni@email.com" },
];

app.get("/", (req, res) => res.send("Hello, World!"));

app.put("/update-data/:id", function (req, res) {
  try {
    // return res.send(req.params.id);

    const { name, email } = req.body;

    if (!name || !email)
      return res
        .status(404)
        .json({ message: "All fields are required", success: false });

    const userId = Number(req.params.id);
    console.log(userId);
    if (!userId)
      return res
        .status(404)
        .json({ message: "User ID is required", success: false });

    const userData = users.find((user) => user.id === userId);
    console.log(userData);
    if (!userData)
      return res
        .status(404)
        .json({ message: "User does not exist.", success: false });

    userData.name = name;
    userData.email = email;

    return res.status(200).json({
      success: true,
      message: "user updated successfully",
      updatedUserData: userData,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

app.listen(8000, () => console.log(`App started listening on port 8000`));
