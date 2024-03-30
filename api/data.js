import mongoose from "mongoose";
import { connectDB } from "../lib/[mongodb].config";
const Data = mongoose.model("Data"); // Import the data model

export default async function handler(req, res) {
   await connectDB();
  const { method } = req;
  // const {id} = req.query

  switch (method) {
    case "GET":
      try {
        const data = await Data.find();
        res.status(200).json(data);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
      break;
    case "POST":
      try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(201).json(savedData);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
      break;
    case "PUT":
      const { id } = req.query;
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
      break;
    case "DELETE":
      const { id } = req.query;
      try {
        const deletedData = await Data.findByIdAndDelete(id);
        if (!deletedData) {
          return res.status(404).json({ message: "Data not found" });
        }
        res.json({ message: "Data deleted successfully" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
