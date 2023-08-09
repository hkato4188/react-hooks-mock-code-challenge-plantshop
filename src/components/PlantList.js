import React from "react";
import PlantCard from "./PlantCard";

function PlantList({
  filteredPlants,
  onPriceChange,
  onDelete,
  onStockChange,
  outOfStockIds,
}) {
  const renderedPlants = filteredPlants.map((p) => {
    return (
      <PlantCard
        key={p.id}
        onPriceChange={onPriceChange}
        {...p}
        onDelete={onDelete}
        onStockChange={onStockChange}
        outOfStockIds={outOfStockIds}
      />
    );
  });

  return <ul className="cards">{renderedPlants}</ul>;
}

export default PlantList;
