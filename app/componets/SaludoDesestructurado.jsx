export default function SaludoDesestructurado({ nombre, edad }) {
  return (
    <div className="bg-green-100 border border-green-300 text-green-800 rounded-xl p-4 shadow-sm w-80 text-center">
      <h2 className="text-xl font-semibold">Hola, soy {nombre}</h2>
      <p className="text-gray-700">Tengo {edad} años.</p>
    </div>
  );
}