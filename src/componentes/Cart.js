import React from 'react';
import { useCarrito } from "./ContextProvider"
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const contexto = useCarrito()
    const { vaciarCarrito } = useCarrito()
    const cart  = contexto.productos
    const Total = contexto.precioTotal
    
    return (
        <div className='contenedor-cart'>
            <h2>Su carrito contiene:</h2>
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
            <div className='tabla-carrito'>
                <Link to="/cart/compra">
                <button className='btn-compra'>Confirmar compra</button>
                </Link>
            
                <button onClick={vaciarCarrito} className='btn-vaciado'>Vaciar Carrito</button>
                

                <p>Precio Total: ${Total}</p>
            </div>
        </div>
        );
}

export default Cart;
