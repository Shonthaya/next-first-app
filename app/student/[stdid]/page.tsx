import Link from "next/link";

export default async function Page({ params } : { params: { stdid: string } }) {
    const { stdid } = await params
 
    return (
        <div>
            <div>student /</div>
            <h2> ID: {stdid} </h2>
            <hr/>
            <h4> Welcome Krub </h4>
            <Link href="/member">back</Link>
        </div>
    );
}