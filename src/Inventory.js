// src/Inventory.js
import React, { useState } from 'react';
import { ITEMS as INITIAL_ITEMS } from './constants';

const Inventory = () => {
  const [items, setItems] = useState(
    INITIAL_ITEMS.map(item => ({
      ...item,
      stock: item.initial_stock
    }))
  );

  const [pressTimer, setPressTimer] = useState(null); // Store the press timer

  const handleDecreaseStock = (id) => {
    // Clear any existing timer before decreasing stock
    clearTimeout(pressTimer);
    setItems(
      items.map(item =>
        item.id === id ? { ...item, stock: item.stock > 0 ? item.stock - 1 : 0 } : item
      )
    );
  };

  const handleResetStock = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, stock: item.initial_stock } : item
      )
    );
  };

  const handleMouseDown = (id, event) => {
    event.preventDefault(); // Prevents the onMouseDown event from turning into an onClick event
    // Clear any existing timer
    clearTimeout(pressTimer);
    // Start a new timer
    const newTimer = setTimeout(() => handleResetStock(id), 2500);
    setPressTimer(newTimer);
  };

  const handleMouseUp = () => {
    // Clear the timer on mouse up
    clearTimeout(pressTimer);
  };

  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className={`col-lg-3 col-md-4 col-sm-6 mb-3 ${item.stock === 0 ? 'out-of-stock' : ''}`}>
          <div className={`card h-100 ${pressTimer ? 'pressed' : ''}`} onClick={() => handleDecreaseStock(item.id)} onMouseDown={(event) => handleMouseDown(item.id, event)} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{item.name}</h5>
                <span className="price">﷼{item.price}</span>
              </div>
              
              <p className="card-text stock-info">
                <strong>Stock:</strong> <strong>{item.stock}</strong> / {item.initial_stock}
              </p>
              
      
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
