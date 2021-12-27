import { useRouter } from 'next/router';
import Link from "next/link";


export default function CodeAndName() {
    const router = useRouter();
    const code = router.query.code;
    const name = router.query.name;

    return (
        <div>
            <h1>Routes / {code} / {name}</h1>
            <Link href="/routes" passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}