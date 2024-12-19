import connectMongoDB from "@/lib/mongodb";
import Rsvp from "@/models/rsvp";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { firstName, lastName, email, rsvp } = await req.json();
  await connectMongoDB();

  await Rsvp.create({ firstName, lastName, email, rsvp });
  return NextResponse.json({ message: "RSVP created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const rsvps = await Rsvp.find();
  return NextResponse.json({ rsvps });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Rsvp.findByIdAndDelete(id);

  return NextResponse.json({ message: "RSVP deleted" }, { status: 200 });
}
