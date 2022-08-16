import React from "react";


const Card = (props) => {
    
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {props.card.map((item, i) => {
          return (
            <div key={i} className="col-sm-12 col-md-6 col-lg-3">
              <div className="card mb-3">
                <img src={item.image} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.url} className="btn btn-primary">
                    Go link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;



