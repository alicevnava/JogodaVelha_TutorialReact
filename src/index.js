// não vai ser editado
import React, { StrictMode } from "react";
// biblioteca para comunicar com o navegador
import { createRoot } from "react-dom/client"; 
// estilização
import "./styles.css";
// componente criado no app.js
import App from "./App";
// insere o index.html no public
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


