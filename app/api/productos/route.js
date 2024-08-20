import { products } from "@/data/asyncMock";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
}

export async function GET(request) {
    await sleep(1000);
    return NextResponse.json(products);
}