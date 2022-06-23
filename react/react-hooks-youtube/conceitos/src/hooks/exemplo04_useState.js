import React, { useState } from 'react';

function Exemplo04_useState(){

    const modelo = {
        nome:'', 
        email:'',
        cidade:'',
    }

    const [formulario, setFormulario] = useState(modelo)

    const evento = (e) => {
        let nome = e.target.name
        let valor = e.target.value

        setFormulario({...formulario,[nome]:valor})
    }

    return(
        <div>
            <input type='text' name='nome' placeholder='Nome' onChange={evento}></input>
            <input type='text' name='email' placeholder='E-mail' onChange={evento}></input>
            <input type='text' name='cidade' placeholder='Cidade' onChange={evento}></input>

            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>

            <p>{JSON.stringify(formulario)}</p>
        </div>

    )

}

export default Exemplo04_useState