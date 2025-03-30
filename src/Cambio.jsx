export function cambiarColor() {
  const colores = ["red", "white"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}

function Cambio() {
  return <button onClick={cambiarColor}>Cambiar color</button>;
}

export default Cambio;
