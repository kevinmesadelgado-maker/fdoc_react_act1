'use client'

import SaludoBasico from "./components/SaludoBasico"
import SaludoDesestructurado from "./components/SaludoDesestructurado";
import PerfilConObjeto from './components/PerfilConObjeto'
import BotonConCallback from './components/BotonConCalback.'
import Contenedor from "./components/ContenedorRenderProp";
import CajaChildren from "./components/CajaChildren";
import SaludoConDefaultProps from "./components/SaludoConDefaultProps";


export default function page() {
  const usuario = {
    nombre: "Maria",
    hobbies: ["leer", "caminar", "programar"],
  };
    
 const manejarClick = () => {
    alert("¡Botón clicado!");
  };
  return (
  <div>
      <h1>Aplicación principal</h1>

      {/* Caso 1: Con entusiasmo */}
      <SaludoBasico nombre = "Juan" entusiasta = {true} />

      {/* Caso 2: Sin entusiasmo */}
      <SaludoBasico nombre = "Maria" entusiasta={false} />

      {/* Componente desestructurado */}
      <SaludoDesestructurado nombre="Emiliano" edad={20} />

      {/* Contenedor con contenido directo */}
      <Contenedor contenido = {<p className="text-gray-800 text-lg font-medium">Hola, soy Emiliano </p>} />

      {/* Contenedor con función render */}
      <Contenedor render = {() => <h2 className="text-blue-600 text-xl font-semibold">Hola desde una función render </h2>} />

      <PerfilConObjeto usuario={usuario} />

      <BotonConCallback onClick={manejarClick} texto="Clic aquí" />

    <CajaChildren/>
    
    <SaludoConDefaultProps/> 
     <Contenedor titulo="Mi Contenedor">
      <p>Este es el contenido dentro del contenedor.</p>
      <button>Acción</button>
    </Contenedor>
    </div>
  )
} 
