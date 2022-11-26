import React from 'react';
import { useCarrito } from "./ContextProvider"

const Cart = () => {
    
    const contexto = useCarrito()
    const cart  = contexto.productos
    const Total = contexto.precioTotal
    
    return (
        <div className='contenedor'>
            <h2>Aquí habrá un Carrito.</h2>
            <div className='tabla-carrito'>
            <p>Producto</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Vacio</p>
            </div>
            {
             cart.map((prod)=>{
                return (
                    <div className='tabla-carrito' key={prod.id}>
                     <p>{prod.title}</p>
                     <p>{prod.price}</p>
                     <p>{prod.cantidad}</p>
                     <p>REMOVE</p>
                    </div>
                )})
            }
            <hr />
            <p>{Total}</p>
        </div>
        );
}

export default Cart;
