import React, { useState } from 'react';

function Exemplo03_useState(){
    const [nota1,setNota1] = useState(0)
    const [nota2,setNota2] = useState(0)

    let media = (nota1+nota2)/2

    let situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'
    return(
        <div>
            <input type='number' placeholder='Primeira Nota' onChange={e=>setNota1(parseFloat(e.target.value))}></input>
            <input type='number' placeholder='Segunda Nota' onChange={e=>setNota2(parseFloat(e.target.value))}></input>

            {nota1&&nota2 ? <h1>{situacao} com média {media}</h1> : ''}
        </div>
    )
}

export default Exemplo03_useState