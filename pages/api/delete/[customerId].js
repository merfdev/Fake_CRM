import Customer from "@/model/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    connectDB();
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .json({ status: "failed", massage: "Internal Server Error" });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      return res
        .status(200)
        .json({ status: "success", massage: "Deleted successfully" });
    } catch (err) {
      console.log(err.massage);
      res
        .status(500)
        .json({ status: "failed", massage: "Error deleting customer" });
    }
  }
}
