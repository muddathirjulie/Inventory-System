import React, { useState, useEffect } from 'react';
import AddInventoryItem from './AddInventoryItem';

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    setInventoryItems([
      { id: 1, name: 'Product 1', quantity: 50, price: 20 },
      { id: 2, name: 'Product 2', quantity: 30, price: 40 },
      { id: 3, name: 'Product 3', quantity: 100, price: 10 },
    ]);
  }, []);

  const addItem = (newItem) => {
    setInventoryItems([...inventoryItems, newItem]);
  };

  const deleteItem = (id) => {
    setInventoryItems(inventoryItems.filter(item => item.id !== id));
  };

  const startEditing = (item) => {
    setEditingItem(item);
  };

  const saveItem = (editedItem) => {
    setInventoryItems(inventoryItems.map(item => (item.id === editedItem.id ? editedItem : item)));
    setEditingItem(null);
  };

  return (
    <div>
      <h2>Inventory List</h2>
      <AddInventoryItem addItem={addItem} />
      {editingItem && (
        <div>
          <h2>Edit Item</h2>
          <form onSubmit={(e) => { e.preventDefault(); saveItem(editingItem); }}>
            <input
              type="text"
              value={editingItem.name}
              onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
            />
            <input
              type="number"
              value={editingItem.quantity}
              onChange={(e) => setEditingItem({ ...editingItem, quantity: e.target.value })}
            />
            <input
              type="number"
              value={editingItem.price}
              onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => startEditing(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
