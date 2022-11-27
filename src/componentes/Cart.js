import React from 'react';
import { useCarrito } from "./ContextProvider"
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const contexto = useCarrito()
    const {vaciarCarrito} = useCarrito()
    const cart  = contexto.productos
    const Total = contexto.precioTotal
    
    return (
        <div className='contenedor'>
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
                     <button className='material-icons'>delete</button>
                    </div>
                )})
            }
            <hr />
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <p className='total-carrito'>Precio Total: ${Total}</p>
            <Link to="/cart/compra">
            <button>Confirmar compra</button>
            </Link>
        </div>
        );
}

export default Cart;
