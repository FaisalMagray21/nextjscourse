const products = [
  { id: 1, name: 'Product1 A', price: 29.99 },
  { id: 2, name: 'Product2 B', price: 49.99 },
  { id: 3, name: 'Product3 C', price: 19.99 },
];
import next from "next";
import { NextResponse } from "next/server";

export async function GET(req){
    return NextResponse.json(products);
}
// export async function GET(req){
//     const {searchParams}=req.nextUrl;
//     console.log("Search Params",searchParams);
//     return NextResponse.json({message:'query params received'})
// }
export async function POST(req){
    const data= await req.json();
    products.push(data);
    return NextResponse.json({
        message:'Data received successfully',
        success:true,
        bodydata:data
    })
}
export async function PUT(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const updatedData = await req.json();

    return NextResponse.json({
      message: "Data updated successfully",
      success: true,
      data: updatedData,
    });
  } catch (error) {
    console.error("PUT /api/products error:", error);
    return NextResponse.json(
      { message: "Error updating product", error: error.message },
      { status: 500 }
    );
  }
}
