import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

export const Item = ( {producto} ) => {

  const { agregarAlCarrito } = useContext (CartContext);

  return (
    <div className="producto">
      <img className="img-producto" src={producto.img} />
      <h2>{producto.categoria.nombre}</h2>
      <p>{producto.titulo}</p>
      <p>${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver más</Link>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}