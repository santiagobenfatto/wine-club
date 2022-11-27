import React from 'react';
import { useCarrito } from "./ContextProvider"
import Cart from './Cart';


const CartContainer = () => {

    const contexto = useCarrito()
    const carrito = contexto.productos

    return (
        <div>
            <div className='contenedor'>
            {carrito.length === 0 ? <h1 className="loading">El carrito está vacío, elige un producto de nuestras categorías</h1> : <Cart/>}
        </div>
        </div>
    );
}

export default CartContainer;
