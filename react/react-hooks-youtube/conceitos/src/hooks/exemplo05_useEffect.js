import React, { useState, useEffect } from 'react';


function Exemplo05_useEffect(){

    const [texto, setTexto] = useState('Hello World...')

    useEffect(()=>{
        setInterval(() => {
            setTexto ('useEffect executado com sucesso')
        }, 5000);
    
    })

    return(
        <h1>{texto}</h1>
    )
}

export default Exemplo05_useEffect