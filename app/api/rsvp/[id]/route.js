import connectMongoDB from "@/lib/mongodb";
import Rsvp from "@/models/rsvp";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { firstName, lastName, email, rsvp } = await req.json();

  await connectMongoDB();
  await Rsvp.findByIdAndUpdate(id, { firstName, lastName, email, rsvp });

  return NextResponse.json({ message: "RSVP updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();

  const rsvp = await Rsvp.findOne({ _id: id });
  return NextResponse.json({ rsvp }, { status: 200 });
}
