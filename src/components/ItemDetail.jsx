import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { CartContext } from './context/CartContext';

export const ItemDetail = ( { producto } ) => {

    const { agregarAlCarrito } = useContext (CartContext);

  return (
    <div>
         <img className='imagen-detail' src={producto.img}/>
         <h1>{producto.nombre}</h1>
         <p>{producto.descripcion}</p>
         <p>{producto.precio}</p>
         <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}


