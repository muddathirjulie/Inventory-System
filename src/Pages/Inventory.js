import React, { useState, useEffect } from 'react';

function Inventory() {
  // State to hold inventory items and search term
  const [inventoryItems, setInventoryItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock fetch function or API call to fetch inventory items
    setInventoryItems([
      { name: 'Item 1', category: 'Category 1', quantity: 20 },
      { name: 'Item 2', category: 'Category 2', quantity: 5 },
      { name: 'Item 3', category: 'Category 1', quantity: 15 },
      { name: 'Item 4', category: 'Category 3', quantity: 8 },
      { name: 'Item 5', category: 'Category 2', quantity: 12 },
    ]);
  }, []); // Empty array ensures this runs only once after the first render

  // Filter inventory items based on search term
  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <h2>Inventory List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Inventory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
