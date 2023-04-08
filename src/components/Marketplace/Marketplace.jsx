import "./Marketplace.css";
import FilterView from "./FilterView";
import SneakerMarket from "./SneakerMarket";

const Marketplace = () => {
  return (
    <div className="marketplace">
      <FilterView />
      <SneakerMarket />
    </div>
  );
};

export default Marketplace;
