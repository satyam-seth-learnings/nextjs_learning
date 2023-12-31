import { NextResponse } from "next/server";

export async function GET(req) {
    console.log(req);

    // Headers
    const requestHeaders = new Headers(req.headers);
    console.log(requestHeaders);

    return NextResponse.json("Hello NextJS API");
}