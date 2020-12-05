import React from "react";
import "./card.css";

const Card = ({ item }) => {
  console.log(item.favFoods);
  return (
    <div className="card">
      <div className="card__image">{/* <img src="" alt=""/> */}</div>

      <div className="card__content">
        <div className="card__text--top">
          <p>
            Name
            <span>{item.name}</span>
          </p>
          <p>
            Wiek
            <span>{item.birthYear}</span>
          </p>
          <p>
            Gaunek
            <span>{item.species}</span>
          </p>
        </div>

        <div className="card__text--bottom">
          {item.favFoods && (
            <div>
              <p>Ulubione jedzenie:</p>
              <ul>
                {item.favFoods.map((n) => (
                  <li dangerouslySetInnerHTML={{ __html: n }} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
