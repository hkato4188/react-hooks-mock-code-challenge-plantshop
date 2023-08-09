import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ search, plantsData, onPriceChange, onDelete }) {
  const renderedPlants = plantsData.map((p) => {
    if (search === "" || p.name.toLowerCase().includes(search)) {
      return (
        <PlantCard
          key={p.id}
          onPriceChange={onPriceChange}
          {...p}
          onDelete={onDelete}
        />
      );
    }
  });

  return <ul className="cards">{renderedPlants}</ul>;
}

export default PlantList;
