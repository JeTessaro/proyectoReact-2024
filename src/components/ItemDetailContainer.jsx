import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
    
    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

    return (
      <div>
        {producto ? (
          <>
          <div className='producto-detail'>
            <img src={producto.img} alt={producto.titulo} className="imagen-detail"/>
            <h2>{producto.categoria.nombre}</h2>
            <p>{producto.titulo}</p>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
          </div>
          </>
        ) : (
          "Cargando..."
        )}
      </div>
    )
}
    
export default ItemDetailContainer