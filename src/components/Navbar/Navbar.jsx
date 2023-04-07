import "./Navbar.css";
import logo from "../../images/logo/logo.png";
import userPic from "../../images/profile/userProfile.jpg"
const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Image of the logo"></img>
        </a>
      </div>
      <div className="nav-links grid">
        <ul className="flex">
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Sale
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Man
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Woman
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Kids
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-navigate flex">
        <div className="search-bar flex">
          <ion-icon class="search-icon" name="search-outline"></ion-icon>
          <input type="text" placeholder="Enter your search shoes..."></input>
        </div>

        <div className="widgets flex">
          <a href="/">
          <ion-icon class="favorite-icon" name="heart-outline"></ion-icon>
          </a>
          <a href="/">
          <ion-icon class="cart-icon" name="bag-handle-outline"></ion-icon>
          </a>
          <div className="profile">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
