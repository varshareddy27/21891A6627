import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ filters, setFilters, products }) => {
  const [selectedCompany, setSelectedCompany] = useState(filters.company);
  const [selectedCategory, setSelectedCategory] = useState(filters.category);
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

  const handleFilterChange = () => {
    setFilters({
      company: selectedCompany,
      category: selectedCategory,
      top: filters.top,
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <div>
        <label>Company:</label>
        <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
          <option value="AMZ">Amazon</option>
          <option value="FLP">Flipkart</option>
          <option value="SNP">Snapdeal</option>
          <option value="MYN">Myntra</option>
          <option value="AZO">Azon</option>
        </select>
        <label>Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          {/* Add more categories as needed */}
        </select>
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
              <p>Company: {product.company}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Discount: {product.discount}%</p>
              <p>Availability: {product.availability}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
