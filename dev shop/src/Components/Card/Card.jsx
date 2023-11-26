import React from "react";
import { cardsData } from "../../Constants";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card-sec">
      {cardsData.map((item) => (
        <div className="card-container" key={item.id}>
          <div className="card">
            <div className="image">
              <img src={item.img} alt="products" />
            </div>
            <h2 className="name">{item.name}</h2>
            <div className="prices">
              <h3>${item.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
