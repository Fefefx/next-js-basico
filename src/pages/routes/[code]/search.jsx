import { useRouter } from 'next/router';
import Link from "next/link";

export default function Search() {
    const router = useRouter();
    const code = router.query.code;

    return (
        <div>
            <h1>Routes / {code} / Search !!!</h1>
            <Link href="/routes">
                <a>
                    <button>Voltar</button>
                </a>
            </Link>
        </div>
    )
}