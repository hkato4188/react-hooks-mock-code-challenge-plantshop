import React, { useState } from "react";

function PlantCard({ id, name, image, price, onPriceChange, onDelete }) {
  const [inStock, setInStock] = useState(true);
  function handleDelete() {
    onDelete(id);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleDelete}>🗑️</button>
      <br />
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Out of Stock</button>
      )}

      <input
        onChange={onPriceChange}
        id={id}
        type="number"
        name="price"
        step="0.01"
        placeholder="Update Price"
      />
    </li>
  );
}

export default PlantCard;
