import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "../form";


function clickOnPlanet(name) {
  console.log(`Cliquei no planeta: ${name} `);
}

async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

const Planets = () => {
  const [planets, setPlanets] = useState([])
  

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])
  
  const addPlanet = (new_planet) => {
    setPlanets([...planets,new_planet])
  }
    return (
      <Fragment>
        <h2>Planet List</h2>  
        <hr/>
        <Form addPlanet={addPlanet}/>
        <hr />
        <hr/>
        {planets.map((planet,index)=>
        <Planet
          name={planet.name}
          descricao={planet.description}
          link={planet.link}
          img_url={planet.img_url}
          id={planet.id}
          key={index}
          clickOnPlanet={clickOnPlanet}
        />
    )}
      </Fragment>
    );

  }


export default Planets;
