import Link from 'next/link';
import router from 'next/router';

export default function Routes() {

    function simpleNavigation(url) {
        router.push(url);
    }

    function navigationWithParams() {
        router.push({
            pathname: '/routes/params',
            query : {
                id: 123,
                name: 'Ana Silva'
            }
        })
    }    

    return (
        <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href="/routes/params?id=12&name=Ana" passHref>
                    <li>Params</li>
                </Link>
                <Link href="/routes/123/buscar" passHref>
                    <li>Buscar</li>
                </Link>
                <Link href="/routes/123/Daniel" passHref>
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <button onClick={() => navigationWithParams() }>Params</button>
                <button onClick={() => router.push("/routes/123/buscar")}>Buscar</button>
                <button onClick={() => simpleNavigation("/routes/123/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}