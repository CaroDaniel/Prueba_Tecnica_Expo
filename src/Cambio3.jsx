export function validarNumero(setMensaje) {
  let numero = parseInt(document.getElementById("numeroInput").value);

  if (!isNaN(numero)) {
    if (numero > 10) {
      setMensaje("El número es mayor a 10");
    } else {
      setMensaje("El número es menor a 10");
    }
  } else {
    setMensaje("Por favor, ingrese un número válido");
  }
}
import { useState } from "react";
function Cambio3() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <input type="number" id="numeroInput" placeholder="Ingrese un número" />
      <button onClick={() => validarNumero(setMensaje)}>Validar Número</button>
      <div>{mensaje}</div>
    </div>
  );
}

export default Cambio3;
