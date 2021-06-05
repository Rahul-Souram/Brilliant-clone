import React from "react";

const Card = (item) => {
  const { id, img, title, text } = item;
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card " key={id} id="cardef">
          <img src={img} className="card-img-top bg-primary" alt={img} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold ">{title}</h5>
            <p className="card-text text-muted">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
