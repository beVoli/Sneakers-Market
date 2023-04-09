import "./FilterList.css";
import FilterBtn from './FilterBtn';

const FilterList = () => {
  return <div className="filter-btn-list">
    <FilterBtn>Category</FilterBtn>
    <FilterBtn>Size</FilterBtn>
    <FilterBtn>Brand</FilterBtn>
    <FilterBtn>Color</FilterBtn>
    <FilterBtn>Price</FilterBtn>
    <FilterBtn>Material</FilterBtn>
    <FilterBtn>Sort by</FilterBtn>
  </div>;
};

export default FilterList;
