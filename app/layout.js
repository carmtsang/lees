import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carmen & Rowan",
  description: "Carmen Tsang & Rowan Lees. May 24, 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
