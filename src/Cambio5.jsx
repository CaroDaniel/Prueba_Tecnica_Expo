export function mostrarLista(setLista) {
  let personas = [
    { nombre: "Pablo Emilio", edad: 34, correo: "pablitoClavito@gmail.com" },
    { nombre: "Anamaria Ortega", edad: 23, correo: "anita@gmail.com" },
    { nombre: "Oscar Gonzales", edad: 45, correo: "oscarGonzales@gmail.com" },
  ];

  setLista(personas); // Guardamos la lista en el estado
}
import { useState } from "react";
function Cambio5() {
  const [lista, setLista] = useState([]);

  return (
    <div>
      <button onClick={() => mostrarLista(setLista)}>Mostrar Lista</button>
      <div>
        {lista.map((persona, index) => (
          <div key={index}>
            <p>
              <strong>Nombre:</strong> {persona.nombre}
            </p>
            <p>
              <strong>Edad:</strong> {persona.edad}
            </p>
            <p>
              <strong>Correo:</strong> {persona.correo}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cambio5;
