import { useState } from "react";
import Form from "../module/Form";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
  const cancelHandler = () => {};
  const saveHandler = () => {};
  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <buttom className="first" onClick={cancelHandler}>
          Cancel
        </buttom>
        <buttom className="second" onClick={saveHandler}>
          Save
        </buttom>
      </div>
    </div>
  );
}

export default AddCustomerPage;
