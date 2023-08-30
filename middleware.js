import { NextResponse } from "next/server";

const secret = process.env.SECRET;

export default function middleware(req) {
    // console.log('middleware running..............')
    const { cookies } = req;
    const checkrole = cookies.get('role')?.value;
    const url = req.url;

    if (url.includes('/admin')) {
        if (!checkrole) return NextResponse.redirect('http://localhost:3000/login')
        if (checkrole !== 'admin') return NextResponse.redirect('http://localhost:3000/login')
    } else if (url.includes('/userhome')) {
        if (!checkrole) return NextResponse.redirect('http://localhost:3000/login')
        if (checkrole !== 'user') return NextResponse.redirect('http://localhost:3000/login')
    } else if (url.includes('/profile')) {
        if (!checkrole) return NextResponse.redirect('http://localhost:3000/login')
        if (checkrole === 'admin' || checkrole === 'user') return NextResponse.next()
        else return NextResponse.redirect('http://localhost:3000/login')
    }
}