import { useState } from "react";
import "./SneakerCard.css";
import heartIcon from "../../images/icons/heart-outline.svg";

const SneakerCard = ({ image }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card">
      <div className="card-preview">
        <img src={image} alt="Photo of sneaker"></img>
        {/* <img
          className="heart-icon"
          src={heartIcon}
          alt="Heart icon"
          onClick={() => setFavorite(!favorite)}
          style={{
            fill: `${favorite ? "#b6002c" : "none"}`,
            color: `${favorite ? "#b6002c" : "rgba(26, 26, 26, 0.4)"}`,
          }}
        ></img> */}
        <svg
          onClick={() => setFavorite(!favorite)}
          xmlns="http://www.w3.org/2000/svg"
          className="heart-icon"
          viewBox="0 0 512 512"
        >
          <path
            d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
            fill={favorite ? "#b6002c" : "none"}
            color={favorite ? "#b6002c" : "rgba(26, 26, 26, 0.4)"}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
        {/* <ion-icon class="heart-icon" name="heart-outline"></ion-icon> */}
      </div>
      <div className="card-info">
        <p className="product-name">Nike Air Force 1 Shadow</p>
        <div className="product-review">
          <ion-icon name="star" class="star-icon"></ion-icon>
          <span>4.9 (120 reviews)</span>
        </div>
        <div className="product-price">
          <span>$130.00</span>
          <ion-icon class="bag-icon" name="bag-handle-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
