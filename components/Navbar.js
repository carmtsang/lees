"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Story", href: "/story" },
  { name: "Schedule", href: "/" },
  { name: "RSVP", href: "/rsvp" },
  { name: "Travel", href: "/travel" },
  { name: "Wedding Party", href: "/weddingparty" },
  { name: "Q & A", href: "/questions" },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center px-6 py-3">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center rounded-md text-md hover:bg-purple-100 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
