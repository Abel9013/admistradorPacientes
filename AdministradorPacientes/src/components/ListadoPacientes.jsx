import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente} ) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? 
            (
              <>
                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                      Administra tus {''}
                      <span className='text-indigo-600 font-bold '>Pacientes y turnos</span>
                    </p>
                    { pacientes.map((paciente)=>
                        <Paciente
                          paciente= {paciente}
                          key= {paciente.id}
                          setPaciente = {setPaciente}
                          />
                      
                                  )
                     }
              </>
            ) 
        : 
          <>
                        <h2 className='font-black text-3xl text-center'>Listado Pacientes vacío</h2>
                        <p className='text-xl mt-5 mb-10 text-center'>
                          Comienza agregando tus pacientes {''}
                          <span className='text-indigo-600 font-bold '>y apareceran aquí</span>
                        </p>
                        { pacientes.map((paciente)=>
                            <Paciente
                              paciente= {paciente}
                              key= {paciente.id}
                              />
                          
                                      )
                        }
          </>
      }
      
      
    </div>

  )
}

export default ListadoPacientes