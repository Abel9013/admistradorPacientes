import { useState } from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const eliminarPaciente = (id)=>{
    const arrayNuevo=pacientes.filter((pacienteFilter)=> id!==pacienteFilter.id)
    setPacientes(arrayNuevo)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header 
        numeros = {1}
      />
      <div className="mt-12 md:flex" >
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
