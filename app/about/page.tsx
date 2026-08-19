import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>About</div>
      <Link href="/contact">next</Link>
      <br />
      <Link href="/">back</Link>
    </div>
  );
}