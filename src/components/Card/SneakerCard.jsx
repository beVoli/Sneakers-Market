import "./SneakerCard.css";


const SneakerCard = ({image}) => {
  return (
    <div className="card">
      <div className="card-preview">
        <img src={image} alt="Photo of sneaker"></img>
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
