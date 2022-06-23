import React, { useState } from 'react';

function Exemplo02_useState() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    
    return(
        <div>
            <input type='text' placeholder='Nome' onChange={e => setNome(e.target.value)}></input>
            <input type='number' placeholder='Idade' onChange={e=> setIdade(e.target.value)} ></input>
            <p>{nome}</p>
            <p>{idade}</p>
        </div>
    )


}

export default Exemplo02_useState