import React, { Fragment } from "react";
import Planet from "./planet";

function clickOnPlanet(name) {
  console.log(`Cliquei no planeta: ${name} `);
}

let mercurio = {
  name: "Mercúrio",
  descricao:
    "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. ",
  link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
  img_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
};


function Planets() {
  return (
    <Fragment>
      <h2>Planet List</h2>
      <button >Underline ON</button>
      <button>Underline OFF</button>

      <hr />

      <Planet
        name={mercurio.name}
        descricao={mercurio.descricao}
        link={mercurio.link}
        img_url={mercurio.img_url}
        clickOnPlanet={clickOnPlanet}
        gray={true}
        title_underline={true}
      />
      <Planet
        name="Plutão"
        descricao="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol."
        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
        clickOnPlanet={clickOnPlanet}
        gray={true}
        title_underline={true}
      />
    </Fragment>
  );
}

export default Planets;
