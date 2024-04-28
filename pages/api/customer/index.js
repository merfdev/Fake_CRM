import Customer from "@/model/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", massage: "Error connecting to database" });
    return;
  }
  const data = req.body.data;
  if (req.method === "POST") {
    if (!data.name || !data.lastName || !data.email) {
      res.status(400).json({
        status: "failed",
        message: "Name, lastName and email are required",
      });
      return;
    }
    try {
      const customer = await Customer.create(data);
      res.status(201).json({ status: "success data create", data: customer });
    } catch (err) {
      res
        .status(500)
        .json({ status: "failed", message: "Error in storing data in DB" });
    }
  }
}
