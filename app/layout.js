import { allura, inter } from "@/app/ui/fonts";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export const metadata = {
  title: "Carmen & Rowan",
  description: "Carmen Tsang & Rowan Lees. May 24, 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto min-h-screen my-9 p-5">
          <Header font={allura.className} />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
