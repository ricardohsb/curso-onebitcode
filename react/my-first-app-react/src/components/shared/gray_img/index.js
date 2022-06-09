import "./style.css";

function GrayImg(props) {
  return (
    <img className={props.gray ? "gray-img" : 'color-img'} alt="Imagem do Planeta" src={props.img_url}></img>
  );
}
export default GrayImg;
