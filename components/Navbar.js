"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Story", href: "/story" },
  { name: "Schedule", href: "/schedule" },
  { name: "RSVP", href: "/rsvp" },
  { name: "Travel", href: "/travel" },
  { name: "Wedding Party", href: "/weddingparty" },
  { name: "Q & A", href: "/questions" },
];
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-evenly px-11 py-3">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("px-1.5 pb-0.5 hover:border-b-2 border-b-green", {
              "pb0.5 px-1.5 border-b-2 border-b-green": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
