import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const baseUrl = `http://localhost:6001/plants`;
  const [plantsData, setPlantsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [outOfStockIds, setOutOfStockIds] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((data) => setPlantsData(data));
  }, []);

  function addNewPlant(formData) {
    fetch(`${baseUrl}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(console.log("New Plant Added!"));

    setPlantsData([...plantsData, formData]);
  }

  function onDelete(id) {
    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => updateDeletedPlants(id))
      .then(() => console.log("Plant Deleted!"));
  }

  function updateDeletedPlants(id) {
    let updatedPlants = plantsData.filter((p) => p.id !== id);
    setPlantsData(updatedPlants);
  }

  function patchPriceChange(e) {
    fetch(`${baseUrl}/${e.target.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ price: e.target.value }),
    })
      .then((res) => res.json())
      .then((updatedItem) => updatePlantsData(updatedItem));
  }

  function updatePlantsData(item) {
    const updatedPlants = plantsData.map((p) => {
      if (p.id === item.id) {
        return item;
      } else {
        return p;
      }
    });
    setPlantsData(updatedPlants);
  }

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  const filteredPlants = plantsData.filter((p) => {
    return searchValue === "" || p.name.toLowerCase().includes(searchValue);
  });

  function handleStockChange(e) {
    const plantStockId = parseInt(e.target.value);
    if (!outOfStockIds.includes(plantStockId)) {
      setOutOfStockIds([...outOfStockIds, plantStockId]);
    } else {
      let inStockUpdate = outOfStockIds.filter(
        (stockId) => stockId !== plantStockId
      );
      setOutOfStockIds(inStockUpdate);
    }
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList
        filteredPlants={filteredPlants}
        onStockChange={handleStockChange}
        outOfStockIds={outOfStockIds}
        onPriceChange={patchPriceChange}
        onDelete={onDelete}
      />
    </main>
  );
}

export default PlantPage;
