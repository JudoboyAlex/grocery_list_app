import React from "react";
import FilterComponents from "./FilterComponents";

const Filters = () => {
  return (
    <ul className="filters">
      <FilterComponents value="all" id="filter0" />
      <FilterComponents value="meat" id="filter1" />
      <FilterComponents value="prod" id="filter2" />
      <FilterComponents value="diary" id="filter3" />
      <FilterComponents value="bakery" id="filter4" />
    </ul>
  );
};

export default Filters;
