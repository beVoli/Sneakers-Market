import "./Navbar.css";
import logo from "../../images/logo/logo2.png";
import userPic from "../../images/profile/userProfile.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const openMobileMenuHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Image of the logo"></img>
        </a>
      </div>
      <div className={`nav-links ${isActive ? "active" : ""}`}>
        <ul>
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
      <div className="menu" onClick={openMobileMenuHandler}>
        <ion-icon class="menu-icon" name="menu-outline"></ion-icon>
      </div>

      <div className="search-bar">
        <ion-icon class="search-icon" name="search-outline"></ion-icon>

        <input type="text" placeholder="Search for sneakers..."></input>
      </div>

      <div className="widgets">
        <a href="/">
          <ion-icon class="favorite-icon" name="heart-outline"></ion-icon>
        </a>
        <a href="/">
          <ion-icon class="cart-icon" name="bag-handle-outline"></ion-icon>
        </a>

        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Navbar;
