import React, { useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useCarrito } from './ContextProvider';
import { db } from '../firebase';
import { toast } from "react-toastify"





const Compra = () => {

    const carrito = useCarrito()
    const productos = carrito.productos
    const { vaciarCarrito }= carrito 
    const nombreComprador = useRef('')
    const mailComprador = useRef('')
    const mailValidacion = useRef('')
    const [id, setId] = useState('')
    const [active, setActive] = useState(null)
    
    const submitFunction = (e) => {     
        e.preventDefault()

        if(mailComprador.current.value !== mailValidacion.current.value){
            setActive(true)
        } else {

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
            toast.success("Cargando orden de compra...")
        })
        .catch((error)=>{
            toast.error(error)
        })
        
        limpiarFormulario(e)
    }
    }        
    
    const limpiarFormulario = (e) =>{
        setActive(null)
        vaciarCarrito()
        e.target.reset()
    }
    
    return (
        <div className='contenedor'>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> :    
            <div className='formulario-container'>
            <h2>Ingresa tus datos para realizar la compra</h2>
            
            <form onSubmit={submitFunction} className='formulario-compra'>
                <p>Ingresa tus datos</p>
                <input ref={nombreComprador} type="text" placeholder='Nombre' className='input-form' required />
            
                <input ref={mailComprador} type="email" placeholder='mail@mail.com' className='input-form email-form' required/>
                
                <input ref={mailValidacion} type="email" placeholder='mail@mail.com' className='input-form email-form' required/>
                

                {active ? <p>Los emails no coinciden!</p> : null}
                <button className='btn-vaciado'>Cargar orden</button>
                
            </form>
            </div>}
         
        </div>
    );
}

export default Compra;
