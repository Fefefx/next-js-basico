import { useRouter } from "next/router"
import Link from "next/link";

export default function Search() {

    const router = useRouter();
    const id = router.query.id;
    const name = router.query.name;

    return (
        <div>
            <h1>Routes Params Id: {id} - Name: {name}</h1>
            <Link href="/routes" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}