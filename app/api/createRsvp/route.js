import connectMongoDB from "@/libs/mongodb";
import Rsvp from "@/models/rsvp";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { firstName, lastName, email, rsvp } = await req.json();
  await connectMongoDB;

  await Rsvp.create({ firstName, lastName, email, rsvp });
  return NextResponse.json({ message: "RSVP created" }, { status: 201 });
}
