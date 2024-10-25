import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Hello</h2>
        <div className="relative flex justify-center items-center p-3">
          <Image
            src="/david_sally_wedding.jpg"
            width={500}
            height={667}
            className="w-100vw md:w-3/4 lg:w-1/2"
            alt="Carmen & Rowan dressed nicely"
          />
        </div>
      </div>
    </main>
  );
}
