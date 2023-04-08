import "./SneakerList.css";
import SneakerCard from '../Card/SneakerCard';

import sneaker1 from "../../images/shoes/shoe1.webp";
import sneaker2 from "../../images/shoes/shoe2.webp";
import sneaker3 from "../../images/shoes/shoe3.webp";
import sneaker4 from "../../images/shoes/shoe4.webp";
import sneaker5 from "../../images/shoes/shoe5.webp";
import sneaker6 from "../../images/shoes/shoe6.webp";
import sneaker7 from "../../images/shoes/shoe7.webp";
import sneaker8 from "../../images/shoes/shoe8.webp";

const SneakerList = () => {
  return <div className="sneaker-collection">
    <SneakerCard image={sneaker1} />
    <SneakerCard image={sneaker2}/>
    <SneakerCard image={sneaker3}/>
    <SneakerCard image={sneaker4}/>
    <SneakerCard image={sneaker5}/>
    <SneakerCard image={sneaker6}/>
    <SneakerCard image={sneaker7}/>
    <SneakerCard image={sneaker8}/>
  </div>;
};
export default SneakerList;
