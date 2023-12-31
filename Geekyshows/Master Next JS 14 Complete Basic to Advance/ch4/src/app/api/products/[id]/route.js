import { NextResponse } from "next/server";

export const GET = async (req) => {
    console.log("Req: ", req);

    return NextResponse.json({ "msg": "success" }, { status: 200 })
};