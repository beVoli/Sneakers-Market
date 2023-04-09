import './FilterCategory.css';
import FilterOption from "./FilterOption";
import { useState } from "react";

const FilterCategory = ({ category }) => {
  const [isActive, setIsActive] = useState(false);

  const arrowStateHandler = () => {
    setIsActive(!isActive);
  };

  // const buttonRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (buttonRef.current && !buttonRef.current.contains(event.target)) {
  //       setIsActive(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [buttonRef]);

  return (
    <div className="filter-category">
      <button
        className="category"
        // ref={buttonRef}
        onClick={arrowStateHandler}
      >
        <span>{category}</span>
        {isActive ? (
          <ion-icon class="arrow-icon" name="chevron-down-outline"></ion-icon>
        ) : (
          <ion-icon class="arrow-icon" name="chevron-up-outline"></ion-icon>
        )}
      </button>
      {isActive && (
        <div className="category-options">
          <FilterOption>Sneakers</FilterOption>
          <FilterOption>Flats</FilterOption>
          <FilterOption>Sandals</FilterOption>
          <FilterOption>Heels</FilterOption>
        </div>
      )}
    </div>
  );
};

export default FilterCategory;
