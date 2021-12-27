import { useEffect, useState } from "react";

export default function Question() {
    
    const [question, setQuestion] = useState(null);

    //Evita que o valor de question seja renderizado várias vezes no componente 
    useEffect(()=> {
        fetch('http://localhost:3000/api/question/123')
        .then(response => response.json())
        .then(setQuestion);
    }, []);

    function renderAnswers() {
        if(question) {
            return question.answers.map((answer,index) => {
                return <li key={index}>{answer}</li>
            })
        }
        return false;
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span> {question?.id} - {question?.question} </span>
                <ul>
                    { renderAnswers() }
                </ul>
            </div>
        </div>
    )
}