import React from 'react';
import ItemCount from './ItemCount';
import { useCarrito } from './ContextProvider';
import { useState } from 'react';
import { toast } from "react-toastify"


const ItemDetail = ({producto}) => {
    
    const {addToCart} = useCarrito()
    const [cantidad, setCantidad] = useState(1)
    const [validado, setValidado] = useState(false)
    
    const agregarCantidad = (cantidad) =>{
        setCantidad(cantidad)
        setValidado(true)
    }

    const agregarAlCarrito = () =>{
        addToCart(producto, cantidad)
        toast.success("producto cargado al carrito",{autoClose:2000})
    }

    return (
        <>
            <img src={producto.img} alt={producto.title} className='img-detail' />
            <div className='contenedor-precio-titulo-detail'>
            <h2 className='detail-title'>{producto.title} - ${producto.price}</h2>
            <p>{producto.detail}</p>
            <ItemCount agregarCantidad={agregarCantidad} inicio={cantidad}/>
            {validado && <button onClick={agregarAlCarrito} className='counter-box'>Agregar al Carrito</button>}
            </div>
        </>
    );
}

export default ItemDetail;
