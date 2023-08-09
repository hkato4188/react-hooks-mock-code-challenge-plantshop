import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  });

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    addNewPlant(formData);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleFormChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleFormChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleFormChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
