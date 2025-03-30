export function mostrarDato(setPersona) {
  setPersona({
    nombre: "Daniel",
    edad: 22,
    correo: "daniel.caroc@uniagustiniana.edu.co",
  });
}
import { useState } from "react";
function Cambio4() {
  const [persona, setPersona] = useState(null);

  return (
    <div>
      <button onClick={() => mostrarDato(setPersona)}>Mostrar Datos</button>
      {persona && (
        <div>
          <p>
            <strong>Nombre:</strong> {persona.nombre}
          </p>
          <p>
            <strong>Edad:</strong> {persona.edad}
          </p>
          <p>
            <strong>Correo:</strong> {persona.correo}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cambio4;
