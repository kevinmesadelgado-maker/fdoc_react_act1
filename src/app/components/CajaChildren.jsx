export default function Contenedor({ children, titulo }) {
  return (
    <div className="contenedor">
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

function page() {
  return (
    <Contenedor titulo="Mi Contenedor">
      <p>Este es el contenido dentro del contenedor.</p>
      <button>Acción</button>
    </Contenedor>
  );
}

