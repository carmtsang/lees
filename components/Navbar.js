import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/story">Story</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/travel">Travel</Link>
        </li>
        <li>
          <Link href="/weddingparty">Wedding Party</Link>
        </li>
        <li>
          <Link href="/questions">Q & A</Link>
        </li>
      </ul>
    </nav>
  );
}
