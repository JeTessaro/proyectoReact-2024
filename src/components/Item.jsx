import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
  return (
    <div className="producto">
      <img className="img-producto" src={producto.img} />
      <h2>{producto.categoria.nombre}</h2>
      <p>{producto.titulo}</p>
      <p>${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  )
}