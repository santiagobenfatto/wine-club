import React from "react";

const CartWidget = () => {
    const cantidadEnCarrito = 3
    return(
        <div className="contenedor-carrito">
        <span className="material-icons carrito">shopping_cart</span>
        <span>{cantidadEnCarrito}</span>
        </div>
        
    )
}

export default CartWidget
