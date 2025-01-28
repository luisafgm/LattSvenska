import React, { useState } from "react";
import "./App.css";
import Vocabulario from "./components/Vocabulario";
import Frases from "./components/Frases";
import Configuracion from "./components/Configuracion";

function App() {
  const [seccion, setSeccion] = useState("inicio");

  const renderSeccion = () => {
    switch (seccion) {
      case "inicio":
        return <h2>¡Bienvenido a Estudio de Sueco!</h2>;
      case "vocabulario":
        return <Vocabulario />;
      case "frases":
        return <Frases />;
      case "configuracion":
        return <Configuracion />;
      default:
        return <h2>Sección no encontrada</h2>;
    }
  };

  return (
    <div className="App">
      <h1>Lätt Svenska</h1>
      <nav>
        <button onClick={() => setSeccion("inicio")}>Inicio</button>
        <button onClick={() => setSeccion("vocabulario")}>Vocabulario</button>
        <button onClick={() => setSeccion("frases")}>Frases útiles</button>
        <button onClick={() => setSeccion("configuracion")}>Configuración</button>
      </nav>
      <div className="seccion">{renderSeccion()}</div>
    </div>
  );
}

export default App;
