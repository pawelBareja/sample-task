import React from "react";
import FoodContainer from "./FoodContainer";
import "./card.css";

const Card = ({ item, handleRemove }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={item.photo} alt={item.name} />
      </div>

      <div className="card__content">
        <div className="card__text--top">
          <p>
            Name:
            <span> {item.name}</span>
          </p>
          <p>
            Wiek:
            <span> {item.birthYear}</span>
          </p>
          <p>
            Gaunek:
            <span> {item.species}</span>
          </p>
        </div>

        <div className="card__text--bottom">
          <FoodContainer food={item.favFoods} />
        </div>
      </div>
      <div
        className="card__close-button"
        onClick={() => handleRemove(item.name)}
      >
        x
      </div>
    </div>
  );
};

export default Card;
