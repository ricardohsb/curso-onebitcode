import { Fragment } from "react";

function DescriptionWithLink(props) {
  return (
    <Fragment>
      <p>{props.descricao}</p>
      <p><a href={props.link}>{props.link}</a></p>
    </Fragment>
  );
}
export default DescriptionWithLink;
