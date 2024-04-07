const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Welcome"));
app.get("/hi", (req, res) => res.send("Hello"));

app.listen(8000, () => console.log(`App started listening on Port 8000`));
