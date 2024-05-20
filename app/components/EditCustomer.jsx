"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { updateCustomer } from "../server-actions/updateCustomer";

const EditCustomer = ({ customer }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: customer.name,
    address: customer.address,
    prescriptions: customer.prescriptions,
    phoneNumber: customer.phone_number,
    complaints: customer.complaints,
    costImp: customer.cost_imp,
    partPay: customer.part_pay,
    balance: customer.balance,
    remarks: customer.remarks,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform update logic here
//     setShowModal(false);
//   };

  return (
    <div>
      <Button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </Button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
            <form action={updateCustomer} onSubmit={() => setShowModal(false)}>
              <Input type="hidden" name="id" value={customer.id} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Name", name: "name", type: "text" },
                  { label: "Address", name: "address", type: "text" },
                  { label: "Prescriptions", name: "prescriptions", type: "text" },
                  { label: "Phone Number", name: "phoneNumber", type: "text" },
                  { label: "Complaints", name: "complaints", type: "text" },
                  { label: "Cost Implication", name: "costImp", type: "number" },
                  { label: "Part Payment", name: "partPay", type: "number" },
                  { label: "Balance", name: "balance", type: "number" },
                  { label: "Remarks", name: "remarks", type: "text" },
                ].map(({ label, name, type }) => (
                  <div key={name} className="mb-4">
                    <Label htmlFor={name} className="block text-gray-700 mb-2">
                      {label}
                    </Label>
                    <Input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCustomer;
