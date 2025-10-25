 // Componente hijo
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

Saludo.defaultProps = {
  nombre: "Invitado",
};

// Componente padre
function page() {
  return <Saludo />;
}
export default page;