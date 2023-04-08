import { useState } from "react";
import "./FilterOption.css";

const FilterOption = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const changeSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <button className="category-option" onClick={changeSelection}>
        <div className={`option-circle ${isSelected && "selected"}`}></div>
        <span className="option">{children}</span>
      </button>
    </div>
  );
};

export default FilterOption;
