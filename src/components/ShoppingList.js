import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  // Using useState to create a new state variable: items
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  //Add an onChange event handler to update the selectedCategory state
  const handleCategoryChange = (e) =>{
    setSelectedCategory(e.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
