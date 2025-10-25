

/**
 * Propósito: Mostrar un saludo simple usando propiedades.
 * Props esperadas:
 * - nombre: string > El nombre de la persona a saludar
 * - entusiasta: boolean > Indica si el saludo debe tener más entusiasmo 
 */


export default function SaludoBasico({ nombre, entusiasta }) {
  return (
    <h2>
      Hola, {nombre}
      {entusiasta ? "!!!" : "."}
    </h2>
  );
}


 