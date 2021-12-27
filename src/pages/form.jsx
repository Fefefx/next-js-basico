import { useState } from 'react';
export default function Form() {
    
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [users, setUsers] = useState([]);

    async function saveUser() {
        await fetch('api/form', {
            method: 'POST',
            body: JSON.stringify({ name, age })
        });
        setName("");
        setAge(0);
        const resp = await fetch('/api/form');
        const users = await resp.json();
        setUsers(users);
    }

    function renderUsers() {
        return users.map((user, index) => {
            return <li key={index}> {user.name} têm {user.age} anos </li>
        }); 
    }

    return (
        <div>
            <h1> Integrando com API #02 </h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="number" value={age}  onChange={e => setAge(+e.target.value)}/>
            <button onClick={saveUser}>Enviar</button>
            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}