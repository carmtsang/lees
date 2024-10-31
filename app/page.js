import Divider from "@/components/divider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div className="relative flex justify-center items-center p-3">
          <Image
            src="/david_sally_wedding.jpg"
            width={500}
            height={667}
            className="w-100vw md:w-3/4 lg:w-1/2"
            alt="Carmen & Rowan dressed nicely"
          />
        </div>
        <Divider />
        <div className="px-6">
          <h3>Saturday, May 25, 2024</h3>
          <p>Aberthau Mansion, 4397 W 2nd Ave, Vancouver</p>
          {/* Countdown goes here */}

          <p>We can&#39;t wait to share our special day with you.</p>
        </div>
      </div>
    </main>
  );
}
