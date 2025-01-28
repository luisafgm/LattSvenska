// src/components/Vocabulario.js
import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import obtenerPalabras from "../services/vocabularioService"; // Servicio para obtener datos
import "./vocabulario.css";

function Vocabulario() {
  const [palabras, setPalabras] = useState([]);
  const [categoria, setCategoria] = useState("verbos"); // Por defecto, muestra verbos

  const COLUMNAS = 2; // Número de columnas por fila (ajustar según el diseño)

  // Cargar palabras según la categoría seleccionada
  useEffect(() => {
    const cargarPalabras = async () => {
      const nuevasPalabras = await obtenerPalabras(categoria);
      setPalabras(nuevasPalabras);
    };
    cargarPalabras();
  }, [categoria]);

  // Dividir las palabras en filas
  const dividirEnFilas = (data, columnasPorFila) => {
    const filas = [];
    for (let i = 0; i < data.length; i += columnasPorFila) {
      filas.push(data.slice(i, i + columnasPorFila));
    }
    return filas;
  };

  return (
    <div className="vocabulario-container">
      <nav className="categoria-nav">
        <button onClick={() => setCategoria("verbos")}>Verbos</button>
        <button onClick={() => setCategoria("adjetivos")}>Adjetivos</button>
        <button onClick={() => setCategoria("palabrasImportantes")}>
          Palabras Importantes
        </button>
      </nav>

      <div className="tarjetas-container">
        {/* Renderizar todas las palabras sin límite */}
        {dividirEnFilas(palabras, COLUMNAS).map((fila, indexFila) => (
          <div className="fila" key={indexFila}>
            {fila.map((item, indexPalabra) => (
              <div key={indexPalabra} className="tarjeta">
                <h4>{item.palabraSue}</h4>
                <p>{item.palabraEsp}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vocabulario;
