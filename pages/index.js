import HomePage from "@/component/template/HomePage";
import Customer from "@/model/Customer";
import connectDB from "@/utils/connectDB";
import { notFound } from "next/navigation";

function Index({ customers }) {
  return <HomePage customers={customers} />;
}
export default Index;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
