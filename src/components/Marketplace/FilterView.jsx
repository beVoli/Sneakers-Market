import "./FilterView.css";
import FilterCategory from "./FilterCategory";

const FilterView = () => {
  return (
    <div className='filter-view'>
      <FilterCategory category={"Category"} />
      <FilterCategory category={"Color"} />
      <FilterCategory category={"Size"} />
    </div>
  );
};

export default FilterView;
