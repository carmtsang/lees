"use client";
import Divider from "@/components/divider";
import { CldImage } from "next-cloudinary";

export default function WeddingParty() {
  return (
    <div>
      <div className="relative flex justify-center items-center p-3">
        <CldImage
          src="wedding_party-EmgTt0is_feuqbe"
          width={500}
          height={667}
          className="w-100vw md:w-3/4 lg:w-2/3"
          alt="Carmen & Rowan"
        />
      </div>
      <Divider />
      <h2>Wedding Party</h2>
      <p>pictures of wedding party goes here</p>
    </div>
  );
}
