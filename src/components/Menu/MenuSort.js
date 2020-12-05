import React from "react";

const MenuSort = ({ pets, handleSortAge }) => {
  return (
    <div>
      <p>Sortowsanie</p>
      <button name="birthYear" onClick={handleSortAge}>
        Wiek
      </button>
      <button name="name" onClick={handleSortAge}>
        Imię
      </button>
    </div>
  );
};

export default MenuSort;
