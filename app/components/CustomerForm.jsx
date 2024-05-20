import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { addCustomer } from "../server-actions/addCustomer";
import { Label } from "@/components/ui/label";

const CustomerList = () => {
  return (
    <form action={addCustomer} className="mb-6">
      <div className="mb-4">
        <Label htmlFor="name" className="block text-white mb-2">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      {/* Apply the style from the first div to the rest of the divs */}
      <div className="mb-4">
        <Label htmlFor="address" className="block text-white mb-2">
          Address
        </Label>
        <Input
          type="text"
          id="address"
          name="address"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="prescriptions" className="block text-white mb-2">
          Prescriptions
        </Label>
        <Input
          type="text"
          id="prescriptions"
          name="prescriptions"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="phoneNumber" className="block text-white mb-2">
          PhoneNumber
        </Label>
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="complaints" className="block text-white mb-2">
          Complaints
        </Label>
        <Input
          type="text"
          id="complaints"
          name="complaints"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="costImp" className="block text-white mb-2">
          Cost Implication
        </Label>
        <Input
          type="number"
          id="costImp"
          name="costImp"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
        {/* <input type="number" /> */}
      </div>
      <div className="mb-4">
        <Label htmlFor="partPay" className="block text-white mb-2">
          Part Payment
        </Label>
        <Input
          type="number"
          id="partPay"
          name="partPay"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="balance" className="block text-white mb-2">
          Balance
        </Label>
        <Input
          type="number"
          id="balance"
          name="balance"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="remarks" className="block text-white mb-2">
          Remarks
        </Label>
        <Input
          type="text"
          id="remarks"
          name="remarks"
          required
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <Button
        type="submit"
        className="bg-green-600 hover:bg-green-300 text-white hover:text-black font-bold py-2 px-4 rounded mt-4"
      >
        Add new Customer
      </Button>
    </form>
  );
};

export default CustomerList;
