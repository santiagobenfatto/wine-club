import React, { useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useCarrito } from './ContextProvider';
import { db } from '../firebase';



const Compra = () => {

    const carrito = useCarrito()
    const productos = carrito.productos
    const nombreComprador = useRef('')
    const mailComprador = useRef('')
    const mailValidacion = useRef('')
    const [id, setId] = useState('')
    
    
    const submitFunction = (e) => {     
        e.preventDefault()

        const ordenCompra = {
            comprador: {
                nombre: nombreComprador.current.value,
                email: mailComprador.current.value
            },
            productos: [...productos]
        }

        const setColeccion = collection(db, "ordenes")
        const setOrdenes = addDoc(setColeccion, ordenCompra)
        
        setOrdenes
        .then((orden) => {
            setId(orden.id)
        })
        .catch((error)=>{
            console.log(error)
        })
    }        
    
    
    
    return (
        <div className='contenedor'>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> : null}
            <h2>Ingresa tus datos para realizar la compra</h2>
            
            <form onSubmit={submitFunction} className='formulario-compra'>
            
                <input ref={nombreComprador} type="text" placeholder='Nombre' className='input-form'></input>
            
                <input ref={mailComprador} type="email" placeholder='mail@mail.com' className='input-form email-form' />

                <input ref={mailValidacion} type="email" placeholder='mail@mail.com' className='input-form email-form' />
                
                <button>Cargar orden</button>
                
            </form>
        </div>
    );
}

export default Compra;
