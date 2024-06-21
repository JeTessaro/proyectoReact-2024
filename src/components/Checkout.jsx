import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { useForm } from "react-hook-form";  
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/config"; 
 


const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");


    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito, 
            total: calcularTotal()
        }
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    } 


    if (docId) {
        return (
            <>
                <h1>Muchas gracias por tucompra</h1>
                <p>Codigo de seguimento: {docId} </p>
            </>
        )
    }



  return (
    <div>
        <form onSubmit={handleSubmit(comprar)} >
            <input type='text' placeholder='Ingrese su nombre' {...register("nombre")} />
            <input type='text' placeholder='Ingrese su e-mail' {...register("email")}  />   
            <button type='submit'>Comprar</button>
        </form>
    </div>
  )
}


export default Checkout
