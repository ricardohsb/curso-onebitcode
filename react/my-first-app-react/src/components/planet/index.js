import React, { useState, useEffect } from "react";
import DescriptionWithLink from "../shared/descriptionwithlink";
import GrayImg from "../shared/gray_img";
import Form from '../planet/form'
import {useParams, Link, useNavigate, Navigate} from 'react-router-dom'


async function getPlanet(id){
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}


const Planet = () =>{
    const [satellites,setSatellites] = useState([])
    const [planet, setPlanet] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()


    useEffect(() => {
      getPlanet(id).then(data=>{
        setSatellites(data['satellites'])
        setPlanet(data['data'])
      })
    },[])
    const goToPlanets = () =>{
        navigate('/')

    }
    const addSatellite = (new_satellite) => {
      setSatellites([...satellites,new_satellite])
    }
 
    return (
      <div>
        <h4>{planet.name}</h4>
        <DescriptionWithLink descricao={planet.description} link={planet.link} />
        <GrayImg img_url={planet.img_url} gray={planet.gray} /> 
        <h4>Satélites</h4>
        <hr/>
        <Form addSatellite={addSatellite}/>
        <hr/>

        <ul>
        {satellites.map((satellites,index) =>
        <li key={index}>{satellites.name}</li>
        )}
        </ul>
        <hr/>
        <button type="button" onClick={goToPlanets}>Voltar a Listagem</button>
      </div>  
  );
}

export default Planet