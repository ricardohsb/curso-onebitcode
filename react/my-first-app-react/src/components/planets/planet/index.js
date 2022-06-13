import DescriptionWithLink from "../../shared/descriptionwithlink";
import GrayImg from "../../shared/gray_img";


function Planet(props) {
    let names = ['a','b','c','d','e']
    let satellites = names.map((n)=> 
        <li>Satélite {n}</li>
    )

    let title
    if(props.title_underline) {
        title = <h4><u>{props.name}</u></h4>
    }else{
        title = <h4>{props.name}</h4>
    }
  return (
    <div onClick={()=>props.clickOnPlanet(props.name)}>
      
      {title}
      <DescriptionWithLink descricao={props.descricao} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} /> 
      {satellites}
      <hr/>
    </div>
  );
}
export default Planet;
