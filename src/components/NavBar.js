import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

let NavBar = () => {
  return (
    <div className="nav">
      <BrowserRouter>
        <div className="nav-horizontal">
          <Link to="/" id="navicon" alt="">
            <img src="/navicon.png" alt="" />
          </Link>
          <ul className="mainmenu">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li className="submenuTitle">
              <Link to="/About">About</Link>
              <ul className="submenu">
                <li>
                  <Link>a</Link>
                </li>
                <li>
                  <Link>b</Link>
                </li>
              </ul>
            </li>
            <li className="submenuTitle">
              <Link to="/Shop">Shop</Link>
              <ul className="submenu">
                <li>
                  <Link>1</Link>
                </li>
                <li>
                  <Link>2</Link>
                </li>
                <li>
                  <Link>3</Link>
                </li>
                <li>
                  <Link>4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
