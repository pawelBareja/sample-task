import React from "react";

const FoodContainer = ({ food }) => {
  return (
    <div>
      {food && (
        <div>
          <p>Ulubione jedzenie:</p>
          <ul>
            {food.map((n) => (
              <li dangerouslySetInnerHTML={{ __html: n }} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodContainer;
