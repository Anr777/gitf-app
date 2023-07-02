import React, { useState } from 'react'

export const BusquedaInput = ({ onNuevaCategoria }) => {

  const [ busqueda, setBusqueda ] = useState('');
  
  const onInputBuscador = (e) => {
    
    setBusqueda(e.target.value)
    console.log(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const inputValue = busqueda.trim().toLowerCase();
    if( inputValue.length <= 1 ) return;

    onNuevaCategoria(inputValue)
    setBusqueda('')
  }
  return (
    <>
      <form onSubmit={ onSubmit }>
        <input type="text" value={ busqueda }
          placeholder='Buscar Gif' onChange={ onInputBuscador }/>
      </form>
    </>
  )
}
