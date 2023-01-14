import { useState, useEffect } from "react"
import useSelectObraSocial from "./hooks/useSelectObraSocial"
import Error from "./Error"
import { obrasSociales } from "../data/obrasSociales"
import generarId from "../helpers/generarId"


function Formulario({pacientes,setPacientes,paciente, setPaciente}) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  // const [mutual, setMutual] = useState('')
  const [obraSocial, SelectObraSocial,setObraSocial] = useSelectObraSocial('Elige tu obra social', obrasSociales)

  const [error, setError] = useState(false)

  useEffect(()=>{
    
    if(Object.keys(paciente).length >0 ){
      console.log(paciente)
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setObraSocial(paciente.obraSocial)
    }
  },[paciente])

  const handleSubmit = ( e ) => {
     e.preventDefault()
    //  Validacion del Formulario
    if([nombre, email, fecha, sintomas, obraSocial].includes('') ){
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
          obraSocial
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
      setObraSocial('')
      // useSelectObraSocial('Elige tu obra social', obrasSociales)

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
          {/* SELECTOR OBRA SOCIAL */}
          <div className='mb-5'>
              <SelectObraSocial />

          </div>
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