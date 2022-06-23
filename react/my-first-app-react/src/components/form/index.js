import React, {Fragment,useState} from 'react';

const initialState = {
    name:'',
    description:'',
    link:'',
    img_url:'',
    id:''
}
const Form = (props) =>{
    const  [fields,setFields] = useState({
        name:'',
        description:'',
        link:'',
        img_url:'',
        id:''

        
})
    const handleFieldsChange = (e)=>setFields({
        ...fields,
        [e.target.name]: e.target.value
    })

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault()
        setFields(initialState)
    }

    return(
        <Fragment>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='nami'>Nome: </label>
                <input id='nami' type='text' name='name' value={fields.name} onChange={handleFieldsChange}></input>
            </div>
            <div>
                <label htmlFor='description'>Descrição: </label>
                <input id='description' type='text' name='description' value={fields.description} onChange={handleFieldsChange}></input>
            </div>
            <div>
                <label htmlFor='link'>Link: </label>
                <input id='link' type='text' name='link' value={fields.link} onChange={handleFieldsChange}></input>
            </div>
            <div>
                <label htmlFor='img_url'>Url da Imagem: </label>
                <input id='img_url' type='text' name='img_url' value={fields.img_url} onChange={handleFieldsChange}></input>
            </div>
            <div>
                <label htmlFor='id'>Id: </label>
                <input id='id' type='text' name='id' value={fields.id} onChange={handleFieldsChange}></input>
            </div>
            
        
            <br/>
            <input type='submit'/>
        </form>
        </Fragment>
    )
}

export default Form
