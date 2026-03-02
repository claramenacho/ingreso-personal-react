import { useState } from 'react'
import './App.css'




function App () {

  const [lista, setLista] = useState([])
  const [nombreUsuario, setNombreUsuario] = useState('')
  const [apellidoUsuario, setApellidoUsuario] = useState('')
  const [dniUsuario, setDniUsuario] = useState('')
  const [legajoUsuario, setLegajoUsuario] = useState('')
  const [cargoUsuario, setCargoUsuario] = useState('')


  function manejarRegistro () {
    const nuevaEntrada = {
      nombre: nombreUsuario,
      apellido: apellidoUsuario,
      dni: dniUsuario,
      legajo: legajoUsuario,
      cargo: cargoUsuario,
    }
    
    setLista([...lista, nuevaEntrada])
    setNombreUsuario('')
    setApellidoUsuario('')
    setDniUsuario('')
    setLegajoUsuario('')
    setCargoUsuario('')    
  }

  function eliminarPersona (index) {
    const listaFiltrada = lista.filter((persona,i) => i !== index)
    setLista(listaFiltrada)

  }

  return (
    <>
      <div className='contenedor-app'>
        <h1>Registro de Personal</h1>
      </div>
      <div className='seccion-registro'>
        <label htmlFor="usuario">Usuario</label>
        <input className="input-usuario"onChange ={(e)=>setNombreUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu nombre"value={nombreUsuario}/>
        <input className="input-usuario"onChange ={(e)=>setApellidoUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu apellido"value={apellidoUsuario}/>
        <input className="input-usuario"onChange ={(e)=>setDniUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu dni"value={dniUsuario}/>
        <input className="input-usuario"onChange ={(e)=>setLegajoUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu legajo"value={legajoUsuario}/>
        <input className="input-usuario"onChange ={(e)=>setCargoUsuario(e.target.value)}type="text" placeholder="Escribe aqui tu nombre"value={cargoUsuario}/>
      </div>
      <div>
        <button className="btn-registrar" onClick={manejarRegistro}>Registrar</button>
      </div>
      <table className='tabla-registros'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dni</th>
            <th>Legajo</th>
            <th>Cargo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((persona, index) => (
            <tr key={index}>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.dni}</td>
              <td>{persona.legajo}</td>
              <td>{persona.cargo}</td>
              <td>
                <button className="btn-eliminar" onClick={()=>eliminarPersona(index)}>Eliminar</button></td>
            </tr>))}
        </tbody>      
      </table>
    </>
  )

  


}

export default App
