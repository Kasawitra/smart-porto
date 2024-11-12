import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="">About</Link>
          <Link href="">Social Media</Link>
        </nav>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}