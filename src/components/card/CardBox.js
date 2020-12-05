import React from "react";
import Card from "./Card";

const CardBox = ({ pets, handleRemove }) => {
  const list = pets.map((item) => (
    <Card item={item} handleRemove={handleRemove} />
  ));

  return <div>{list}</div>;
};

export default CardBox;
