import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from '../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { toast } from "react-toastify"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        
        const coleccionProductos = collection(db, 'productos')
        const getProductsById = doc(coleccionProductos, id)
        const consultaFetch = getDoc(getProductsById)

        consultaFetch
        .then((respuesta)=>{
            setItem(respuesta.data())
        })
        .catch((error)=>{toast.error(error)})       

    },[id])

    return (
        <div className='contenedor-detail'>
        {Object.keys(item).length === 0 ? <h1 className='loading'>Cargando...</h1> : <ItemDetail producto={{id, ...item}}/>}
        </div>
    );
}

export default ItemDetailContainer;
