import "./FilterBtn.css";
import { useState } from "react";

const FilterBtn = ({optionName }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive && (
        <button className={`btn-filter`}>
          <span className="btn-name">{optionName}</span>
          <ion-icon
            onClick={() => setIsActive(false)}
            name="close-outline"
          ></ion-icon>
        </button>
      )}
    </>
  );
};

export default FilterBtn;
