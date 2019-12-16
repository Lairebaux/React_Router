import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import { items } from "./data.js";

let NavBar = () => {
  return (
    <BrowserRouter>
      <div className="nav-horizontal">
        <Link to="/" id="navicon"  alt="">
          <img src="/navicon.png" alt="Icons8" />
        </Link>
        <ul className="mainmenu">
          <li><Link to="/Home">Home</Link></li>
          <li className="submenuTitle">
            <Link to="/About">About</Link>
              <ul className="submenu">
                <li><Link>a</Link></li>
                <li><Link>b</Link></li>
            </ul>
          </li>
          <li className="submenuTitle">
            <Link to="/Shop">Shop</Link>
            <ul className="submenu">
              <li><Link>1</Link></li>
              <li><Link>2</Link></li>
              <li><Link>3</Link></li>
              <li><Link>4</Link></li>
            </ul>
          </li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </BrowserRouter>
  );
};

let renderRoot = () => {
  return (
    <div>
      Bienvenue. Click here to view all items:
      <Link to="/allItems">All Items</Link>
    </div>
  );
};

let renderAllItems = () => {
  return (
    <div>
      <div className="header">
        <h1>Header</h1>
      </div>
      <div className="container">
        <div className="nav">
          <NavBar />
        </div>

        <div className="aside">
          <h4>Non culpa cillum aliquip qui dolore incididunt aliqua culpa ut cillum. Nulla do non l
            aboris cupidatat laboris consectetur nisi cillum excepteur eiusmod magna esse sit. Exercitation culpa incididunt et occaecat amet
            cupidatat adipisicing exercitation. Minim occaecat exercitation sint eiusmod est qui id consequat veniam occaecat dolor est aliqua. 
            Proident cupidatat occaecat quis veniam sint dolore aliquip.</h4>
        </div>
        <div className="section">
          {items.map(i => (
            <div className="card" key={i.id}>
              <div>
                <img src={i.img} alt={i.id} />
              </div>
              <div className="desc">{i.description}</div>
              <div className="price">{i.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderRoot} />
          <Route exact={true} path="/allItems" render={renderAllItems} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
