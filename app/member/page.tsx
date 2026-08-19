import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Member</div>
      <Link href="/artsai/a">Artsai</Link>
      <br />
      <Link href="/dpartment/finance">Dpartment</Link>
      <br />
      <Link href="/student/1">Student</Link>
      <br />
      <Link href="/techer/1/A/CS">Techer</Link>
      <br />
      <Link href="/contact">back</Link>
    </div>
  );
}