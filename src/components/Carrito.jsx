import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext'

const  Carrito = () => {

    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext)

    /*const acumuladorProductosIguales = () => {
      const productosCantidad = {};
      carrito.forEach(prod => {
        if (productosCantidad[prod.titulo]) {
          productosCantidad[prod.titulo].cantidad += 1;
        } else {
          productosCantidad[prod.titulo] = { ...prod, cantidad: 1 };
        }
      });
      return Object.values(productosCantidad);
    }*/
    

   

    
  return (
    <div>
        {carrito.map((prod) => {
          return (
            <Fragment key={prod.id}>
                <h1>{prod.titulo}: ${prod.precio}</h1>
                <button onClick={() => { eliminarProducto(prod)}}> X </button>
                <Link to="/finalizar-compra">Finalizar Compra</Link>
            </Fragment>       
  )})})

        {
        carrito.length > 0 ?
        <>
        <h2>Total : ${calcularTotal()}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </> :
        <h2>Carrito vacío :/</h2>
        }
    </div>
  )
}

export default Carrito
