"use client"
// Import necessary dependencies
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// AuthForm component
export default function AuthForm() {
    // Initialize Supabase client
    const supabase = createClientComponentClient();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <Auth
                    supabaseClient={supabase}
                    view="magic_link"  // Use magic link for authentication
                    redirectTo='https://vivbanx-db.vercel.app/auth/callback'  // Callback URL
                    showLinks={false}  // Do not show sign-in/up links
                    providers={['google']}  // Enable Google as a provider
                    appearance={{
                        theme: 'dark',  // Set theme to dark
                        button: {
                            className: 'w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
                        },
                        input: {
                            className: 'w-full bg-gray-700 border-gray-600 text-white p-3 rounded mb-4'
                        },
                        label: {
                            className: 'block text-gray-300 mb-2'
                        },
                        container: {
                            className: 'space-y-4'
                        }
                    }}
                />
            </div>
        </div>
    );
}
