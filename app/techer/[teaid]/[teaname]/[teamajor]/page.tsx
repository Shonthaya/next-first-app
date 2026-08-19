import Link from "next/link";

export default async function Page( { params } : { params: { teaid: string, teaname: string, teamajor: string } }) {
    const { teaid, teaname, teamajor } = await params;
    return (
        <div>
            <div>techer /</div>
            <h2> Teacher Id: {teaid} </h2>
            <h2> Teacher Name: {teaname} </h2>
            <h2> Teacher Major: {teamajor} </h2>
            <hr/>
            <h4 > Welcome {teaname} </h4>
            <Link href="/member">back</Link>
        </div>
    );
}