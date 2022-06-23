import React, { useState, useEffect, Fragment } from 'react';


const FormularioCadastro = (props) =>{
    const limparFormulario = {
        nome:'',
        idade:'',
        telefone:'',
        endereco:''
}
    const [cadastrados,setCadastrados] = useState([])
    const [fields, setFields] = useState(limparFormulario)

    
    const handleChange = (e) => setFields({
        ...fields,
        [e.target.name]: e.target.value
    },[])

    const addCadastro = (novoCadastro) => {
        setCadastrados([...cadastrados,novoCadastro])
    }
    const enviarCadastro =(e)=>{
        e.preventDefault()
        addCadastro(fields)
        setFields(limparFormulario)
        
        console.log(fields)
        console.log(cadastrados)

    }
    

    return(
        <Fragment>
            <div>
                <h1>Cadastro de Pessoas</h1>
            </div>
            <hr/>
            <div>
                <form onSubmit={enviarCadastro}>
                    <label htmlFor='nome'>Nome: </label>
                    <input id='nome' type='text' name='nome' placeholder='Insira o nome' value={fields.nome} onChange={handleChange}></input>
                    <br/>
                    <label htmlFor='idade'>idade: </label>
                    <input id='idade' type='number' name='idade' placeholder='Insira a idade' value={fields.idade} onChange={handleChange}></input>
                    <br/>
                    <label htmlFor='telefone'>Telefone: </label>
                    <input id='telefone' type='number' name='telefone' placeholder='Insira o telefone' value={fields.telefone} onChange={handleChange}></input>
                    <br/>
                    <label htmlFor='endereco'>Endereço: </label>
                    <input id='endereco' name='endereco' placeholder='Insira o endereço' value={fields.endereco} onChange={handleChange}></input>
                    <br/>
                    <br/>
                    <input type='submit'/> 
                    <button>Limpar</button>
                    <hr/>
                </form>
            </div>

            <div>
                <h3>Cadastrados:</h3>
                <ul>
                {cadastrados.map((cadastrados,index) =>
                <li key={index}>Nome: {cadastrados.nome} 
                <br/>Idade: {cadastrados.idade}
                <br/>Telefone: {cadastrados.telefone}
                <br/>Endereço: {cadastrados.endereco}
                <hr/></li>
                
        )} 
        
                </ul>
               
            </div>

        </Fragment>
    )
}

export default FormularioCadastro

