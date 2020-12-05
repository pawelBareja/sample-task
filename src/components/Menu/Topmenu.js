import React from "react";
import MenuSort from "./MenuSort";

const Topmenu = ({ pets, handleSortAge }) => {
  return (
    <div>
      <MenuSort pet={pets} handleSortAge={handleSortAge} />
    </div>
  );
};

export default Topmenu;
