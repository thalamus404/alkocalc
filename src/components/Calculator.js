import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [volume, setVolume] = useState('');
  const [percentage, setPercentage] = useState('');
  const [price, setPrice] = useState('');
  const [efficiency, setEfficiency] = useState(null);

  const normalizeInput = (value) => {
    // Ersetzt Kommas durch Punkte
    return value.replace(',', '.');
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handlePercentageChange = (e) => {
    setPercentage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const calculateEfficiency = () => {
    const volumeFloat = parseFloat(normalizeInput(volume));
    const percentageFloat = parseFloat(normalizeInput(percentage));
    const priceFloat = parseFloat(normalizeInput(price));
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
          type="text"
          inputMode="decimal"
          value={volume}
          onChange={handleVolumeChange}
          placeholder="0,5"
        />
        <span>L</span>
      </div>
      <div className="input-group">
        <label>Alkoholgehalt in %:</label>
        <input
          type="text"
          inputMode="decimal"
          value={percentage}
          onChange={handlePercentageChange}
          placeholder="5,2"
        />
        <span>%</span>
      </div>
      <div className="input-group">
        <label>Preis in Euro:</label>
        <input
          type="text"
          inputMode="decimal"
          value={price}
          onChange={handlePriceChange}
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