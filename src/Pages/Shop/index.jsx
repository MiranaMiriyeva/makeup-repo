import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
        setProducts(response.data.slice(0, 50)); 
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="shop">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image_link} alt={product.name} />
          <div className="content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price_sign}{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
