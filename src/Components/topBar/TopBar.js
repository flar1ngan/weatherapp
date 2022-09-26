import "./topBar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const TopBar = () => {
  const [click, setClick] = useState(false);

  const manualClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  const refresh = () => {
    window.location.reload(false)
  }


  const isAuth = localStorage.getItem('authorized');
  


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WEATHER <i class="fa-solid fa-cloud" />
          </Link>
          <div className="menu-icon" onClick={manualClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/weather"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Weather
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chat" className="nav-links" onClick={closeMobileMenu}>
                Chat
              </Link>
            </li>
            {!isAuth &&
            <li className="nav-item sign">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
              Sign Up
                {/* {isAuth? <span>Log Out</span> : <span>Sign Up</span> } */}
              </Link>
            </li>}
            {isAuth &&
            <li className="nav-item sign">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {closeMobileMenu(); deleteAllCookies(); localStorage.clear(); refresh()}}
              >
              Log Out
                {/* {isAuth? <span>Log Out</span> : <span>Sign Up</span> } */}
              </Link>
            </li>}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
