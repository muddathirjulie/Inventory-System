import React, { useState, useEffect } from 'react';

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newItem, setNewItem] = useState({ name: '', category: '', quantity: '' });

  useEffect(() => {
    // Placeholder inventory data (this could later be fetched from a database)
    setInventoryItems([
      { name: 'Item 1', category: 'Category 1', quantity: 20 },
      { name: 'Item 2', category: 'Category 2', quantity: 5 },
      { name: 'Item 3', category: 'Category 1', quantity: 15 },
      { name: 'Item 4', category: 'Category 3', quantity: 8 },
      { name: 'Item 5', category: 'Category 2', quantity: 12 },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setInventoryItems([...inventoryItems, newItem]);
    setNewItem({ name: '', category: '', quantity: '' });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = inventoryItems.filter((_, i) => i !== index);
    setInventoryItems(updatedItems);
  };

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <h2>Inventory List</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Inventory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add New Item Form */}
      <div className="add-item-form">
        <h3>Add New Item</h3>
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={newItem.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newItem.category}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Item</button>
        </form>
      </div>

      {/* Inventory Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleDeleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
