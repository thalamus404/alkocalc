import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [volume, setVolume] = useState('');
  const [percentage, setPercentage] = useState('');
  const [price, setPrice] = useState('');
  const [efficiency, setEfficiency] = useState(null);

  const calculateEfficiency = () => {
    const volumeFloat = parseFloat(volume.replace(',', '.'));
    const percentageFloat = parseFloat(percentage.replace(',', '.'));
    const priceFloat = parseFloat(price.replace(',', '.'));
    if (isNaN(volumeFloat) || isNaN(percentageFloat) || isNaN(priceFloat)) {
      setEfficiency(null);
      return;
    }
    const pal = ((volumeFloat * percentageFloat) / priceFloat) * 10;
    setEfficiency(pal.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1>Alkocalc</h1>
      <div className="input-group">
        <label>Menge in Liter:</label>
        <input
          type="number"
          inputMode="decimal"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="0,5"
        />
        <span>L</span>
      </div>
      <div className="input-group">
        <label>Alkoholgehalt in %:</label>
        <input
          type="number"
          inputMode="decimal"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="5,2"
        />
        <span>%</span>
      </div>
      <div className="input-group">
        <label>Preis in Euro:</label>
        <input
          type="number"
          inputMode="decimal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="1,29"
        />
        <span>€</span>
      </div>
      <button onClick={calculateEfficiency}>Berechnen</button>
      {efficiency !== null && (
        <div className="result">
          <p>Dein Getränk hat eine Effizienz von:</p>
          <p className="efficiency-value">{efficiency} pal</p>
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={efficiency}
              readOnly
              className="slider"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;