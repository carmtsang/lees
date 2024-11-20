"use client";
import Divider from "@/components/divider";
import { CldImage } from "next-cloudinary";

export default function Page() {
  return (
    <div>
      <div className="relative flex justify-center items-center p-3">
        <CldImage
          src="rsvp-nmgTt0is_gs37yz"
          width={667}
          height={500}
          className="w-100vw md:w-3/4 lg:w-2/3"
          alt="Carmen & Rowan"
        />
      </div>
      <Divider />
      <h2>RSVP</h2>
    </div>
  );
}
