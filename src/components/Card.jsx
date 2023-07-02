import React from 'react'

export const Card = ({ img }) => {
  const { id, title, url} = img
  return (
    <div className='card'>
      <img src={ url } alt={ title} />
      <p>{title}</p>
    </div>
  )
}
