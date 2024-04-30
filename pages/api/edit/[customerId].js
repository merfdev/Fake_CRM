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
  if (req.method === "PATCH") {
    const id = req.query.id;
    const data = req.body;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updateAt = Date.now();
      await customer.save();
      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      res
        .status(500)
        .json({ status: "failed", message: "Error updating customer" });
    }
  }
}
