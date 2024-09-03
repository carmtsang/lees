import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3">
      <Link className="font-bold" href="/">
        Home
      </Link>
      <Link className="font-bold" href="/story">
        Story
      </Link>
      <Link className="font-bold" href="/schedule">
        Schedule
      </Link>
      <Link className="font-bold" href="/travel">
        Travel
      </Link>
      <Link className="font-bold" href="/weddingparty">
        Wedding Party
      </Link>
      <Link className="font-bold" href="/questions">
        Q & A
      </Link>
    </nav>
  );
}
