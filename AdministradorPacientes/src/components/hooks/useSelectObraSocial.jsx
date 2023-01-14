import {useState} from 'react'
const useSelectObraSocial = (label, opciones ) => {
    const [state, setState] = useState('')
    const SelectObraSocial = ()=>(
        <>
            <label className='block text-gray-700 uppercase font-bold' >
                {label}
            </label>
            <select
                value={state}
                onChange= {e => setState(e.target.value)}
                className='w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md'
                >
                <option value=""  >Seleccione su obra social</option>
                {opciones.map(opcion=>(
                    <option
                      key={opcion.id}
                      value={opcion.id}                        
                >{opcion.nombre}</option>
                ))}
            </select>
            
        </>)
    
    return [ state,SelectObraSocial,setState ]
}

export default useSelectObraSocial