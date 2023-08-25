import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const res = await request.json()
    console.log({ res })
    const res1 = {
        "isSuccess": true,
        "code": 1000
    }
    return NextResponse.json({ res1 })
}