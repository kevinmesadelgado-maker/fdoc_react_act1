export default function PerfilConObjeto({ usuario }) {  
  return (
    <div>
      <h2>{usuario.nombre}</h2>
      <p>Hobbies: {usuario.hobbies.join(", ")}</p>
    </div>
  );
}