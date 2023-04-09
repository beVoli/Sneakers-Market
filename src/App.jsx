import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Marketplace from "./components/Marketplace/Marketplace";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Marketplace />
      <Footer />
    </div>
  );
};

export default App;
