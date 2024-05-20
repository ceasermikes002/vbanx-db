"use client"
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthForm() {
    const supabase = createClientComponentClient();

    return (
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            redirectTo="http://localhost:3000/auth/callback"
            showLinks={false}
            providers={['google']}
            appearance={{
                theme:'dark',
                button:{
                    className:'bg-white text-gray-900 hover-bg-gray-400'
                },
                input:{
                    className:'bg-gray-700 border-gray-600 text-white p-10'
                }
            }}
        />
    );
}
