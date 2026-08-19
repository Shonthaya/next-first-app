import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>liberly /</div>
      <Link href="/member">next</Link>
      <br />
      <Link href="/dpartment/human">back</Link>
    </div>
  );
}
