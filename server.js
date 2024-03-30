require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
const Data = require("./model/data");

const app = express();
const port = process.env.PORT; // Adjust port if needed

// Database connection (replace with your MongoDB URI)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CRUD Routes
app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/data", async (req, res) => {
  const newData = new Data({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/api/data/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedData = await Data.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/api/data/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await Data.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
