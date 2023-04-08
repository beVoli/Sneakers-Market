import "./Navbar.css";
import logo from "../../images/logo/logo2.png";
import userPic from "../../images/profile/userProfile.jpg";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const buttonRef = useRef(null);

  const openMobileMenuHandler = () => {
    setIsActive(!isActive);
  };

  const searchBarHandler = () => {
    setSearchActive(true);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [buttonRef]);

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
            <a className="nav-link active" href="/">
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
              Men
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Women
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

      <div className={`search-bar ${searchActive && 'active'}`}>
        <ion-icon class="search-icon" name="search-outline"></ion-icon>

        <input onClick={searchBarHandler} ref={buttonRef} type="text" placeholder="Search for sneakers..."></input>
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
