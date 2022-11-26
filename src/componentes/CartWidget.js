import React from "react";
import { useCarrito } from "./ContextProvider";


const CartWidget = () => {
    
    const contexto = useCarrito()

    return(
        <div className="contenedor-carrito">
        <span className="material-icons carrito">shopping_cart</span>
        <span>{contexto.cantidad}</span>
        </div>
        
    )
}

export default CartWidget
