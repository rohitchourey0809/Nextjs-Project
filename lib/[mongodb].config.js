import mongoose from "mongoose";

const uri = process.env.MONGODB_URI; // Replace with your MongoDB URI

export const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit the application if connection fails
  }
};
