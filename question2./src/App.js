import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { getProducts } from './services/api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ company: 'AMZ', category: 'Laptop', top: 10, minPrice: 1, maxPrice: 10000 });

  useEffect(() => {
    getProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [filters]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Top Products</h1>
        </header>
        <Routes>
          <Route path="/" element={<ProductList filters={filters} setFilters={setFilters} products={products} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
