import { useState, useEffect } from "react"
import Error from "./Error"
import generarId from "../helpers/generarId"

function Formulario({pacientes,setPacientes,paciente, setPaciente}) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(paciente) >0 ){
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const handleSubmit = ( e ) => {
     e.preventDefault()
    //  Validacion del Formulario
    if([nombre, email, fecha, sintomas].includes('') ){
      setError(true)
      return
    }
      setError(false)
      // Construyo el objeto Paciente
      const objetoPaciente = {
          nombre,
          email, 
          fecha,
          sintomas,
        }
        if(paciente.id){
          // Editando el registro
          objetoPaciente.id = paciente.id;
          const pacientesActualizados = pacientes.map((pacienteArray)=> (paciente.id ===  pacienteArray.id ? objetoPaciente : pacienteArray)  )
          setPacientes(pacientesActualizados)
          setPaciente({})
        }else{
          // Nuevo registro 
          objetoPaciente.id = generarId()
          setPacientes([...pacientes, objetoPaciente])
        }

      // Reiniciar el formulario
      setNombre('')
      setEmail('')
      setFecha('')
      setSintomas('')
      setError('')

    }
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
       <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
       <p className='text-lg mt-5 text-center mb-10'>
          Añade pacientes y {''}
          <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
       </p>

       <form 
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 ml-2'
            onSubmit={handleSubmit}  >
              {
                 error && <Error>Todos los campos son obligatorios'</Error> }
          <div className='mb-5'>
              <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>
                Nombre Paciente
              </label>
              <input id='nombre'
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                 type="text" 
                 placeholder='Nombre del Paciente '
                 value={nombre} 
                 onChange={(e)=>setNombre(e.target.value)} />
          </div>

          {/* <div className='mb-5'>
              <label htmlFor='obra' className='block text-gray-700 uppercase font-bold'>
                Obra Social
              </label>
              <select id='obra' className='w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md' >
                  <option value="Sancor">Sancor</option>
                  <option value="Ospat">Ospat</option>
                  <option value="Osep">Osep</option>
                  <option value="Osprera">Osprera</option>
                  <option selected value="Otra" >Otra</option>
              </select>
          </div> */}
          <div className='mb-5'>
              <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>
                Email Paciente
              </label>
              <input 
                  id='email' 
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  type="email" 
                  placeholder='Email del Paciente ' 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}  
              />
          </div>

          <div className='mb-5'>
              <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>
                Alta
              </label>
              <input 
                  id='fecha' 
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                  type="date"
                  value={fecha} 
                  onChange={(e)=>setFecha(e.target.value)}    
              />
          </div>
          <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                Diagnóstico 
              </label>
              <textarea  id='sintomas' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                type="date" 
                placeholder='Describe el diagnóstico'
                value={sintomas} 
                onChange={(e)=>setSintomas(e.target.value)}   />
          </div>
        <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' 
          value={paciente.id ? 'Guardar cambios' : 'Agregar Paciente'}
       />


       </form>
    </div>
  )
}

export default Formulario