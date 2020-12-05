import React from "react";
import Card from "./Card";

const CardBox = ({ pets }) => {
  const list = pets.map((item) => <Card item={item} />);

  return <div>{list}</div>;
};

export default CardBox;
