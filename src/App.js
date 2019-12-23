import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import HomePage from "./components/Homepage";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";


let renderShoppingPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <NavBar />
        <Aside />
        <Items />
      </div>
      <Footer />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={HomePage} />
          <Route exact={true} path="/allItems" render={renderShoppingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
