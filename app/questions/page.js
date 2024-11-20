"use client";
import Divider from "@/components/divider";
import { CldImage } from "next-cloudinary";

export default function Page() {
  return (
    <div>
      <div className="relative flex justify-center items-center p-3">
        <CldImage
          src="questions-zngTt0is_mpguz6"
          width={667}
          height={500}
          className="w-100vw md:w-3/4 lg:w-2/3"
          alt="Carmen & Rowan"
        />
      </div>
      <Divider />
      <h2>Q & A</h2>
    </div>
  );
}
