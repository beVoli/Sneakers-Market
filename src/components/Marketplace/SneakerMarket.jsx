import './SneakerMarket.css';
import FilterList from './FilterList';
import SneakerList from './SneakerList';

const SneakerMarket = () => {
return <div className="market">
  <h2 className="market-category">Recommended</h2>
  <FilterList />
  <SneakerList />
</div>
}

export default SneakerMarket;