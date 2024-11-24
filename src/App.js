import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inventory from './Pages/Inventory';
import './styles.css'; 


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Inventory Management System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Welcome to the Inventory Management System</h2>;
}

export default App;
