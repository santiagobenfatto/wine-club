import React from "react";
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
    <>
    <nav>
        <h1 className="title">Wine Club</h1>
        <div className="desplegable">
            <button className="boton-links">Categorias</button>
            <div className="contenido-menu">
                <a href="#">Tintos</a>
                <a href="#">Blancos</a>
                <a href="#">Espumantes</a>
                <a href="#">Otras bebidas...</a>
            </div>
        </div>
        <CartWidget />
    </nav>
    </>
    )
}

export default NavBar

