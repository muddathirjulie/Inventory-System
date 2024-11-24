import React, { useState } from 'react';

function AddInventoryItem({ addItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && quantity && price) {
      const newItem = {
        id: Date.now(), 
        name,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      };
      addItem(newItem); 
      setName('');
      setQuantity('');
      setPrice('');
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <div>
      <h2>Add New Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddInventoryItem;
