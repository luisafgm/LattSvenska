// src/api.js
import axios from "axios";

const obtenerVocabulario = async (palabra, idiomaOrigen, idiomaDestino) => {
  try {
    // Utilizamos una API gratuita de traducción (LibreTranslate)
    const response = await axios.post("https://libretranslate.de/translate", {
      q: palabra,
      source: idiomaOrigen,
      target: idiomaDestino,
      format: "text",
    });
    
    return response.data.translatedText;
  } catch (error) {
    console.error("Error al obtener la traducción:", error);
    return "";
  }
};

export default obtenerVocabulario;
