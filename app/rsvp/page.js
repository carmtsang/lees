import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1>RSVP</h1>
      <div className="relative flex justify-center items-center p-3">
        <Image
          src="/wedgemount.jpeg"
          width={667}
          height={500}
          className="w-100vw md:w-3/4"
          alt="Carmen & Rowan camping"
        />
      </div>
    </div>
  );
}
