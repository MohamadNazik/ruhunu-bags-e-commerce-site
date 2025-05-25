import React from "react";
import "./New.css";
import new_products from "../Assets/sample data/newData";
import Item from "../Item/Item";

const New = () => {
  return (
    <div className="new">
      <h1>NEWLY ARRIVED BAGS</h1>
      <hr />
      <div className="new-item">
        {new_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default New;
