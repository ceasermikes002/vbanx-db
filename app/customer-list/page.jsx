import React from "react";
import CustomerForm from "../components/CustomerForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import EditCustomer from "../components/EditCustomer";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteCustomer } from "../server-actions/deleteWatch";

const Customer = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: customers, error } = await supabase
    .from('customers')
    .select('*')
    .eq("user_id", user.id)
    .order("name", { ascending: true });

    if(error){
        console.error('Error fetching customers')
    }
    console.log({customers});
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        <div className="flex justify-between items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            My customer list
          </h1>
          <form action="/auth/signout" method="post">
            <Button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px4 rounded"
              type="submit"
            >
              Sign Out
            </Button>
          </form>
        </div>
        <CustomerForm />
        <div class="mt-6">
        {customers.length > 0 ? (
  customers.map((customer) => (
    <div key={customer.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <div>
            <h2 className="text-xl font-bold text-white">
              Name: {customer.name}
            </h2>
            <p className="text-gray-400">Address: {customer.address}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              Prescriptions: {customer.prescriptions}
            </h2>
            <p className="text-gray-400">Phone Number: {customer.phone_number}</p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <div>
            <p className="text-gray-400 font">Complaints: <span className="font-light capitalize">{customer.complaints}</span></p>
            <p className="text-gray-400">Cost Implication: <span className="font-light capitalize">₦{customer.cost_imp}</span></p>
            <p className="text-gray-400">Partial Payment: <span className="font-light capitalize">₦{customer.part_pay}</span></p>
          </div>
          <div>
            <p className="text-gray-400">Balance: <span className="font-light capitalize">₦{customer.balance}</span></p>
            <p className="text-gray-400">Remarks: <span className="font-light capitalize">{customer.remarks}</span></p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <form action={deleteCustomer}>
          <Input type="hidden" name="id" value={customer.id} />
          <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-7 px-4 rounded" type="submit">
            Delete
          </Button>
        </form>
        {/* Assuming EditCustomer is a component */}
        <EditCustomer customer={customer}/>
      </div>
    </div>
  ))
) : (
  <div className="text-red-400">No customers had been added yet.</div>
)}

</div>

      </div>
    </div>  
  );
};

export default Customer;
