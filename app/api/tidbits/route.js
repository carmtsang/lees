import connectMongoDB from "@/lib/mongodb";
import Tidbit from "@/models/tidbit";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { question, answer } = await req.json();
  await connectMongoDB();

  await Tidbit.create({ question, answer });
  return NextResponse.json({ message: "Tidbit created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const tidbits = await Tidbit.find();
  return NextResponse.json({ tidbits });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Tidbit.findByIdAndDelete(id);

  return NextResponse.json({ message: "Tidbit deleted" }, { status: 200 });
}
