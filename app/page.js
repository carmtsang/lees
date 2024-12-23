"use client";
import Divider from "@/components/divider";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main>
      <div>
        <div className="relative flex justify-center items-center p-3">
          <CldImage
            src="home-JkgTt0is_aolk3c"
            width={667}
            height={500}
            className="w-100vw md:w-3/4 lg:w-2/3"
            alt="Carmen & Rowan"
          />
        </div>
        <Divider />
        <div className="px-6">
          <h2>Saturday, May 25, 2024</h2>
          <h3>Aberthau Mansion, 4397 W 2nd Ave, Vancouver</h3>
          {/* Countdown goes here */}

          <p>We can&#39;t wait to share our special day with you.</p>
        </div>
      </div>
    </main>
  );
}
