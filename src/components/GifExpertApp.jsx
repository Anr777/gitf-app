import { useState } from "react"
import { BusquedaInput, ItemGif } from '../components'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onNuevaCategoria = ( nuevaCategoria ) => {
    if( categories.includes(nuevaCategoria)) return;
    setCategories([ nuevaCategoria, ...categories])
  }
  
  return (
    <>
      {/**Titulo */}
      <h1>GifExpertApp</h1>
      {/**Input */}
      <BusquedaInput 
        // setCategories = { setCategories }
        onNuevaCategoria = { onNuevaCategoria }
      />

      {/**Listado de Gif */}
      <ul>
        {
          categories.map( (listado) => (
            <ItemGif key={listado} listado = { listado } />
          ))
        }
      </ul>
        {/**Gif Item */}

    </>
  )
}
