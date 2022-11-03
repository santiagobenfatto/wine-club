import React from "react";
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
    <>
    <nav>
        <NavLink to='/'>
        <h1 className="title">Wine Club</h1>
        </NavLink>
        <div className="desplegable">
            <button className="boton-links">Categorias</button>
            <div className="contenido-menu">
                <NavLink to="/">Todos</NavLink>
                <NavLink to="/productos/tinto">Tintos</NavLink>
                <NavLink to="/productos/blanco">Blancos</NavLink>
                <NavLink to="/productos/espumante">Espumantes</NavLink>
            </div>
        </div>
        <NavLink to="/cart">
        <CartWidget />
        </NavLink>
    </nav>
    </>
    )
}

export default NavBar

