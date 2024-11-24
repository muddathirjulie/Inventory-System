import React from 'react';

const Inventory = () => {
  const items = [
    { id: 1, name: 'Laptop', quantity: 10 },
    { id: 2, name: 'Mouse', quantity: 25 },
    { id: 3, name: 'Keyboard', quantity: 15 },
  ];

  return (
    <div>
      <h2>Inventory</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
