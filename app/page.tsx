import Link from 'next/link';
export default function Page() {
  return (
    <div>
      <Link href="/about/">About</Link>
      <Link href="/contact/">Contact</Link>
      <Link href="/member/">Member</Link>
      <Link href="/artsai/">Artsai</Link>
    </div>
  );
}