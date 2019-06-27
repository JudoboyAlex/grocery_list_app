import React from "react";
import Filters from "./Filters";
import NewCatForm from "./NewCatForm";

const FilterCategories = () => {
  return (
    <section id="filterCategories">
      <Filters />
      <NewCatForm />
    </section>
  );
};

export default FilterCategories;