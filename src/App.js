// src/App.js
import React from 'react';
import Inventory from './Inventory';
import Rules from './Rules';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file
import rvLogo from './assets/rv-logo.png'; // Adjust the path as needed
import mitLogo from './assets/mit-logo.png'; // Adjust the path as needed

function App() {
  return (
    <div className="App container vh-100">
    <div className="row align-items-center justify-content-between my-4">
      <div className="col-auto">
        <img src={rvLogo} alt="Riffa Views International School Logo" className="logo" />
      </div>
      <div className="col text-center">
        <h1 className="title m-0">MIT x RVIS - EGG DROP CHALLENGE</h1>
      </div>
      <div className="col-auto">
        <img src={mitLogo} alt="MIT Logo" className="logo" />
      </div>
    </div>
      <Rules />
      <Inventory />
    </div>
  );
}

export default App;