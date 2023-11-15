import React, { useState } from "react";

function Item({ name, category }) {

  // Add State to keep track of whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Update className based on whether the item is in the cart
  const itemClass = isInCart ? "in-cart" : "";

  // Update text of the button based on item
  const buttonText = isInCart ?"Remove From Cart" : "Add to Cart";

  //Add event handler to toggle the item's status in the cart
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}> {buttonText}
      </button>
    </li>
  );
}

export default Item;
