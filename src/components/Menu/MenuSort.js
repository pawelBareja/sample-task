import React from "react";

const MenuSort = ({ pets, handleSortAge }) => {
  return (
    <div>
      <p>Sortowanie</p>
      <button onClick={handleSortAge}>Wiek</button>
    </div>
  );
};

export default MenuSort;
