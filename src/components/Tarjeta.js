// src/components/Tarjeta.js
import React from 'react';
import './Tarjeta.css';

function Tarjeta({ palabraEsp, palabraSue }) {
  return (
    <div className="tarjeta">
      <div className="palabra-sueca">{palabraSue}</div>
      <div className="palabra-espanol">{palabraEsp}</div>
    </div>
  );
}

export default Tarjeta;
