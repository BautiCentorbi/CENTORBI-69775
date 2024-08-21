import { products } from "@/data/asyncMock";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
}

export async function GET(request, { params }) {
    const { category } = params;
    const data =
    !category
        ? products
        : products.filter(
            data => data.category.toLowerCase() === category.toLowerCase()
        );
        await sleep(1000);
    return NextResponse.json(data);
}