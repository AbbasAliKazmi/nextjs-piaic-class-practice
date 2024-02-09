import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isLoggedIn: boolean = false;

export default function middleware(request: Request){
    // if(!isLoggedIn && request.url === 'https://localhost:3000/ourteam'){
    //     return NextResponse.redirect(new URL('/',request.url))
    // }
    // return NextResponse.next()
    return NextResponse.redirect(new URL("/",request.url))
}

export const config ={
    matcher: ['/ourteam']
}