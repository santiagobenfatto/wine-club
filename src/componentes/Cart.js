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
            <p>Cantidad</p>
            <p>Precio</p>
            </div>
            {
             cart.map((prod)=>{
                return (
                    <div className='tabla-carrito' key={prod.id}>
                     <p>{prod.title}</p>
                     <p>{prod.cantidad}</p>
                     <p>{prod.price}</p>
                    </div>
                )})
            }
            <hr />
            <p className='total-carrito'>Precio Total: ${Total}</p>
        </div>
        );
}

export default Cart;
