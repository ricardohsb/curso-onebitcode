import React from 'react';
import Planet from '../components/planet';
import { Link } from 'react-router-dom'

const notFoundScreen = ()=>{
    return(
        <div>
            <h3>Página nao encontrada</h3>
            <Link to='/'>Voltar</Link>
        </div>
    )
}

export default notFoundScreen