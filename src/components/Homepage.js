import React from "react";
import { Link } from "react-router-dom";



let HomePage = () => {
  return (
    <div>
      Bienvenue. Click here to view all items:
      <Link to="/allItems">All Items</Link>
    </div>
  );
};

export default HomePage