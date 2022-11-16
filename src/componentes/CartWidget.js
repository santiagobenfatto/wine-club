import React from "react";
import { useContext } from "react";
import { contexto } from "./ContextProvider";


const CartWidget = () => {
    
    const valorDelContexto = useContext(contexto)

    return(
        <div className="contenedor-carrito">
        <span className="material-icons carrito">shopping_cart</span>
        <span>{valorDelContexto.cantidad}</span>
        </div>
        
    )
}

export default CartWidget
