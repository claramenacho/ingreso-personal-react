import { useState } from 'react'
import './App.css'



function App () {

  const [lista, setLista] = useState([])
  const [nombreUsuario, setNombreUsuario] = useState('')
  const [apellidoUsuario, setApellidoUsuario] = useState('')


  function manejarRegistro () {
    const nuevaEntrada = {
      nombre: nombreUsuario,
      apellido: apellidoUsuario,
    }
    
    setLista([...lista, nuevaEntrada])
    setNombreUsuario('')
    setApellidoUsuario('')    
  }

  function eliminarPersona (index) {
    const listaFiltrada = lista.filter((persona,i) => i !== index)
    setLista(listaFiltrada)

  }

  return (
    <>
      <div className='contenedor-app'>
        <label htmlFor="usuario">Usuario</label>
        <input className="input-usuario"onChange ={(e)=>setNombreUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu nombre"value={nombreUsuario}/>
        <input className="input-usuario"onChange ={(e)=>setApellidoUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu apellido"value={apellidoUsuario}/>
      </div>
      <div>
        <button className="btn-registrar" onClick={manejarRegistro}>Registrar</button>
      </div>
      <table className='tabla-registros'>
        <tbody>
          {lista.map((persona, index) => (
            <tr key={index}>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>
                <button className="btn-eliminar" onClick={()=>eliminarPersona(index)}>Eliminar</button></td>
            </tr>))}
        </tbody>      
      </table>
    </>
  )

  


}

export default App
