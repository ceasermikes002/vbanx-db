"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function deleteCustomer(formData) {
    const watchId = formData.get('id')


    const cookieStore = cookies()
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data:{session}} = await supabase.auth.getSession()
    const user = session?.user

    if (!user) {
        console.error("User is not authenticated within the addCustomer server action")
        return
    }

    const {error} = await supabase
    .from('customers')
    .delete()
    .match({id: watchId, user_id: user.id})

    if(error) {
        console.error("Error deleting customer data", error)
        return
    }

    revalidatePath('/customer-list')

    return {message:"Sucess"}
}