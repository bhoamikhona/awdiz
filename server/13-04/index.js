import express from "express";

const app = express();

const students = [
  {
    id: 1,
    name: "Bhoami",
    email: "bhoami@email.com",
  },
  {
    id: 2,
    name: "Aarohi",
    email: "aarohi@email.com",
  },
  {
    id: 3,
    name: "Roshni",
    email: "roshni@email.com",
  },
];

app.get("/", (req, res) => res.send("Working"));

app.delete("/delete-user/:id", function (req, res) {
  try {
    const userId = Number(req.params.id);

    if (!userId)
      return res
        .status(404)
        .json({ success: false, message: "User ID is required" });

    const user = students.findIndex((user) => user.id === userId);

    if (user === -1)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    students.splice(user, 1);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      updatedUserList: students,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

app.listen(8000, () => console.log(`App started listening on port 8000`));
