import React from "react";

function PlantCard({
  id,
  name,
  image,
  price,
  onPriceChange,
  onDelete,
  onStockChange,
  outOfStockIds,
}) {
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
      {!outOfStockIds.includes(id) ? (
        <button value={id} onClick={onStockChange} className="primary">
          In Stock
        </button>
      ) : (
        <button value={id} onClick={onStockChange}>
          Out of Stock
        </button>
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
