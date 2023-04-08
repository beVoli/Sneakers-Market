import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Marketplace from './components/Marketplace/Marketplace';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Marketplace />
    </div>
  );
};

export default App;
