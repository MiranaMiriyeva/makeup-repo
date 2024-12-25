import React, { useState, useEffect } from 'react';
import makeupProducts from '../../Db/Data.js'; // data.js dosyanızdan veriyi içe aktarın

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    setProducts(makeupProducts);
    setFilteredProducts(makeupProducts);
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  useEffect(() => {
    filterProducts();
  }, [category, priceRange]);

  const filterProducts = () => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div id='shop'>
      <h1>Shop</h1>
      <div className="filters">
        <div>
          <label>Category: </label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Lip">Lip</option>
            <option value="Face">Face</option>
            <option value="Eyes">Eyes</option>
          </select>
        </div>
        <div>
          <label>Price Range: </label>
          <select value={priceRange} onChange={handlePriceRangeChange}>
            <option value="">All</option>
            <option value="0-10">0-10</option>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
          </select>
        </div>
      </div>
      <div className="product-cards">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <img src={product.photo} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
