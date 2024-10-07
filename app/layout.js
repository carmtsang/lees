import { Inter, Allura } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carmen & Rowan",
  description: "Carmen Tsang & Rowan Lees. May 24, 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-green ${inter.className}`}>
        <div className="min-h-screen max-w-5xl mx-auto p-4 bg-white">
          <Header font={allura.className} />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
