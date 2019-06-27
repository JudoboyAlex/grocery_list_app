import React from "react";

const FilterComponents = ({ value, id }) => {
  return (
    <li>
      <input type="radio" name="category" value={value} id={id} />
      <label htmlFor={id}> {value} </label>
    </li>
  );
};

export default FilterComponents;
