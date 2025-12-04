export default function Contenedor({ contenido, render }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80 text-center border border-gray-200">
      {contenido? (
        contenido
      ) : render? (
        render()
      ) : (
        <p className="text-gray-500">No hay contenido disponible</p>
      )}
    </div>
  );
}