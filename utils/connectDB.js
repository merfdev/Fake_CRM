import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
}

export default connectDB;
