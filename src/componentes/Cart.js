import React from 'react';
import { useCarrito } from "./ContextProvider"

const Cart = () => {
    
    const valorDelContexto = useCarrito()
    
    return (
        <div className='contenedor-items'>
            <h2>Aquí habrá un Carrito.</h2>
            <span>Producto1 - Tablita - Cantidad - Precio - QuitarDelCarrito</span>
            <span>Producto2 - Tablita - Cantidad - Precio - QuitarDelCarrito</span>        
        </div>
    );
}

export default Cart;
