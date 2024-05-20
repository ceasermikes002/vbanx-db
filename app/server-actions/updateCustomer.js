"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function updateCustomer(formData) {
    const id = formData.get('id')
    const name = formData.get('name')
    const address = formData.get('address')
    const prescriptions = formData.get('prescriptions')
    const phoneNumber = formData.get('phoneNumber')
    const complaints = formData.get('complaints')
    const costImp = formData.get('costImp')
    const partPay = formData.get('partPay')
    const balance = formData.get('balance')
    const remarks = formData.get('remarks')

    const cookieStore = cookies()
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data:{session}} = await supabase.auth.getSession()
    const user = session?.user

    if (!user) {
        console.error("User is not authenticated within the updateCustomer server action")
        return
    }

    const {data, error} = await supabase
    .from('customers')
    .update(
        {
           name,
           address,
           prescriptions,
           phone_number:phoneNumber,
           complaints,
           cost_imp:costImp,
           part_pay:partPay,
           balance,
           remarks,
        //    user_id:user.id
        }
    ).match({
        id,user_id:user.id
    })

    if(error) {
        console.error("Error updating data", error)
        return
    }

    revalidatePath('/customer-list')

    return {message:"Sucess"}
}