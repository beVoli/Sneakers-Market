import "./FilterView.css";
import FilterOption from "./FilterOption";
import { useState, useRef, useEffect } from "react";

const FilterView = () => {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef(null);

  const arrowStateHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [buttonRef]);

  return (
    <div className="filter-view">
      <div className="filter-category">
        <button
          className="category"
          ref={buttonRef}
          onClick={arrowStateHandler}
        >
          <span>Category</span>
          {isActive ? (
            <ion-icon
              class="arrow-icon"   
              name="chevron-down-outline"
            ></ion-icon>
          ) : (
            <ion-icon
              class="arrow-icon"
              name="chevron-up-outline"
            ></ion-icon>
          )}
        </button>
        <div className="category-options">
          <FilterOption>Sneakers</FilterOption>
          <FilterOption>Flats</FilterOption>
          <FilterOption>Sandals</FilterOption>
          <FilterOption>Heels</FilterOption>
        </div>
      </div>
    </div>
  );
};

export default FilterView;
