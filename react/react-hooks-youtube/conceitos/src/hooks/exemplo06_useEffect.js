import React, { useState, useEffect } from 'react';

//busca
//https://github.com/ralfslima/requisicao_react_get/blob/master/src/App.js
function Exemplo06_useEffect(){

    const [vetor,setVetor] = useState([])
    const [status,setStatus] = useState('Carregando...')
    const [camp, setCamp] = useState('')
    const [teste,setTeste] = useState('')

    useEffect(()=>{
        obterDados()
    })

    const obterDados = async () => {
        const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        const converter = await dados.json()
        setVetor(converter)
        setStatus('Dados Carregados com sucesso....')
    }
    const alterarValorCampo =(e)=>{
        setTeste(e.target.value)
    }
    const enviarCampo = (e) =>setCamp(teste)
    
    return(
        <div>
            <h1>{status}</h1>
            <input type='text' placeholder='Filtrar pelo título' value={teste.value} onChange={alterarValorCampo} />
            <button onClick={enviarCampo}>Filtrar</button>
        
        <hr />

        <table border='1'>
            <tbody>
            {vetor.filter(obj => obj.title.includes(camp)).map(dados=>(
                <tr key={dados.title}>
                <td>{dados.id}</td>
                <td>{dados.title}</td>
                <td><a href={dados.url}>{dados.url}</a></td>
                </tr>
            ))}   
        </tbody>
      </table>
       
           
        </div>
    )
}

export default Exemplo06_useEffect