import React from 'react';
import PropType from "prop-types";


const Card = (props) => {
  return (
<div className="card" style={{width: '20rem'}}>
  <img src="https://picsum.photos/550/400" className="card-img-top " alt="..."></img>
  <div className="card-body">
    <h5 className="card-title text-center">{props.title}</h5>
    <p className="card-text text-center">{props.description}</p>
  </div>
    <div className="card-footer text-center p-3">
    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
  </div>
 </div>);
};

Card.propTypes = {
	title: PropType.string,
  imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};
export default Card;


