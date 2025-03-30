import { useState } from "react";

function Cambio2() {
  const [textos, setTextos] = useState({
    texto1: "Hola damas",
    texto2: "Hola caballeros",
    texto3: "Hola",
  });

  function cambiarTextos() {
    const text1 = ["Hola Mundo", "Hola Universo"];
    const text2 = ["Hola Tierra", "Hola Marte"];
    const text3 = ["Hola Omega", "Hola Alfa"];

    setTextos({
      texto1: text1[Math.floor(Math.random() * text1.length)],
      texto2: text2[Math.floor(Math.random() * text2.length)],
      texto3: text3[Math.floor(Math.random() * text3.length)],
    });
  }

  return (
    <div>
      <p>{textos.texto1}</p>
      <p>{textos.texto2}</p>
      <p>{textos.texto3}</p>
      <button onClick={cambiarTextos}>Cambiar 3 Textos</button>
    </div>
  );
}

export default Cambio2;
