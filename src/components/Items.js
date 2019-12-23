import React from "react";
import { items } from "../data.js";



let Items = () => {
  return (
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
  );
};


export default Items