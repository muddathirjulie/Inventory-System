import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>Inventory Management System</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Inventory Management System</h2>;
}

function Inventory() {
  return <h2>Inventory Page</h2>;
}

export default App;
