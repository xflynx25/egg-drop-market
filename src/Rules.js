// src/Rules.js
import React, { useState } from 'react';

const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <h2 className="d-flex justify-content-between align-items-center user-select-none rules-header" style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
        Rules
        <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
      </h2>
      <div className={isOpen ? 'collapse show rules-text' : 'collapse rules-text'}>
        <ul>
          <li>Each team will receive 100 RVIS-Riyals.</li>
          <li>Each team receives 3 eggs at the halfway point</li>
          <li>The team who survives the most eggs, WINS - you can build 1 big structure, or multiple small vessels.</li>
          <li>Tiebreaker = most money left over!</li>
          <li>You may buy from the market or trade with each other.</li>
          <li>Theft is an automatic disqualification. No stealing!</li>
        </ul>
        <div className="color-values">
          <h3>Color Values:</h3>
          <ul>
            <li><span className="color-box red"></span> Red: 1 RVIS-Riyal</li>
            <li><span className="color-box other"></span> Others: 5 RVIS-Riyals</li>
            <li><span className="color-box pink"></span> Pink: 10 RVIS-Riyals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
