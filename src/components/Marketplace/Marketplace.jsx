import "./Marketplace.css";
import FilterView from "./FilterView";
import SneakerMarket from "./SneakerMarket";

const FILTER_OPTIONS = [
  {
    criteria: "Category",
    options: ["Sneakers", "Flats", "Sandals", "Heels"],
  },
  {
    criteria: "Price",
    options: ["$0 - $50", "$50 - $100", "$100 - $150", "Over $150"],
  },
  {
    criteria: "Size",
    options: ["42", "42.5", "43", "43.5"],
  },
  {
    criteria: "Color",
    options: [
      "Black",
      "Blue",
      "Green",
      "Grey",
      "Orange",
      "Red",
      "Purple",
      "White",
      "Multicolor",
    ],
  },
  {
    criteria: "Brand",
    options: ["Nike", "Adidas", "Armani", "Puma", "BOSS"],
  },
  {
    criteria: "Material",
    options: ["Leather", "Rubber", "Mesh", "Synthetic", "Cotton", "Wool"],
  },
  {
    criteria: "Gender",
    options: ["Men", "Women", "Unisex"],
  },
  {
    criteria: "On Sale",
    options: ["Sale"],
  },
  {
    criteria: "Rating",
    options: ["5 star", "4 star", "3 star", "2 star", "1 star"],
  },
];

const Marketplace = () => {
  return (
    <div className="marketplace">
      <FilterView filterOptions={FILTER_OPTIONS} />
      <SneakerMarket filterOptions={FILTER_OPTIONS} />
    </div>
  );
};

export default Marketplace;
