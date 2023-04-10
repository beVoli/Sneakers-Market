import "./FilterList.css";
import FilterBtn from './FilterBtn';


const FilterList = ({filterOptions}) => {

  return <div className="filter-btn-list">
    {filterOptions.map(option => <FilterBtn key={Math.random()} optionName={option.criteria}/>)}
  </div>;
};

export default FilterList;
