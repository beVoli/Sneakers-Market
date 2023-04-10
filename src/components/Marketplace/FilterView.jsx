import "./FilterView.css";
import FilterCategory from "./FilterCategory";


const FilterView = ({ filterOptions }) => {
  return (
    <div className="filter-view">
      {filterOptions.map((option) => (
        <FilterCategory key={Math.random()} category={option.criteria} options={option.options} />
      ))}
    </div>
  );
};

export default FilterView;
