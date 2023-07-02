import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/peticion'
 import { Card } from './Card'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const ItemGif = ({ listado }) => {

  const { images, isLoading } = useFetchGifs( listado );

  console.log({ images, isLoading })
  


  return (
    <>
      <h3>{ listado }</h3>
    <div className='card-grid'>
      {
        (isLoading? <h2>Cargando...</h2> : (
          
          images.map( img => (
            <Card key={img.id} img = { img } />
            ))
        ))
      }
      
    </div>
      <h3>{  }</h3>
    </>
  )
}
