import Image from "next/image";
import inkBlot from "@/public/2174688-7a0b13.svg";

export default function Divider() {
  return (
    <div className="relative flex justify-center items-center p-12">
      <Image src={inkBlot} width={200} alt="ink blot divider" />
    </div>
  );
}
