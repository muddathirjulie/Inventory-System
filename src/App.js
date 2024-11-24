import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './Pages/Inventory';
import './styles.css';  // Importing the global styles

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

export default App;
