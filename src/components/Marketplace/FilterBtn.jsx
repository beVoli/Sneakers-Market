import "./FilterBtn.css";
import { useState } from "react";

const FilterBtn = (props) => {
  const [isActive, setIsActive] = useState(false);

  const selectFilter = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={`btn-filter ${isActive ? 'selected' : ''}`}
        // style={{
        //   background: `${isActive ? "#b6002c" : "#f5f5f5"}`,
        //   color: `${isActive ? "#fff" : "#000"}`,
        // }}
        onClick={selectFilter}
      >
        <span className="btn-name">{props.children}</span>
        {isActive && <ion-icon name="checkmark-outline"></ion-icon>}
      </button>
    </div>
  );
};

export default FilterBtn;
