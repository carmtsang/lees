import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const con = await connectMongoDB();
  return NextResponse.json({ message: "Database is connected" });
}
