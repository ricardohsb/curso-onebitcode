import React, { useState, useEffect } from "react";
import DescriptionWithLink from "../../shared/descriptionwithlink";
import GrayImg from "../../shared/gray_img";
import Form from './form'



async function getSatellites(id){
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}


const Planet = (props) =>{
    const [satellites,setSatellites] = useState([])

    useEffect(() => {
      getSatellites(props.id).then(data=>{
        setSatellites(data['satellites'])
      })
    },[])
    const addSatellite = (new_satellite) => {
      setSatellites([...satellites,new_satellite])
    }
    return (
      <div>
        {props.name}
        <DescriptionWithLink descricao={props.descricao} link={props.link} />
        <GrayImg img_url={props.img_url} gray={props.gray} /> 
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
      </div>  
  );
}

export default Planet