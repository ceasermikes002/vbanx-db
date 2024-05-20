import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'

export async function middleware(req) {
    const res =  NextResponse.next()
    const supabase = createMiddlewareClient({req,  res})

    const {data : {user}} = await supabase.auth.getUser()

    if (user && req.url.pathname === '/') {
        return NextResponse.redirect(new URL('/customer-list', req.url));
    }
    

    if (!user && new URL(req.url).pathname !== "/") {
        return NextResponse.redirect(new URL('/', req.url))
    }    

    return res
}

export const config = {
    matcher: ['/', '/customer-list']
}