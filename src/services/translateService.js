// src/services/translateService.js
import axios from "axios";

const API_KEY = "TU_API_KEY"; // Tu clave de API de Yandex Translate
const API_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&lang=es+sv`;

const traducirPalabra = async (palabra) => {
  try {
    const response = await axios.post(API_URL, null, {
      params: {
        text: palabra,
      },
    });
    return response.data.text[0]; // Devuelve la traducción al sueco
  } catch (error) {
    console.error("Error al traducir:", error);
    return palabra; // Si hay error, devuelve la misma palabra
  }
};

export default traducirPalabra;
