import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase";


const ItemListContainer = () => {
    
    const [items, setItems] = useState([]) 
    const {category} = useParams() 

    useEffect(() => {

        const colleccionProductos = collection(db, "productos")
        
        if(category){
            
            const filtroCategorias = query(colleccionProductos, where("category", "==", category))
            const consultaFetch = getDocs(filtroCategorias)
            
            consultaFetch
            .then((respuesta) => {
                    const productosFirebase = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productosFirebase)
                })
                .catch((error) => {
                    console.log(error)
                })

        }else{
        
        const consultaFetch = getDocs(colleccionProductos)
        
        consultaFetch
        .then ((respuesta) => {
            const productosFirebase = respuesta.docs.map(prod => ({...prod.data(), id: prod.id}))
            setItems(productosFirebase)
        })
        .catch((error)=>{console.log(error)})
        }

    }, [category])

    return (
        <div className='contenedor'>
            <h1>Productos</h1>
            {items.length == 0 ? <h1 className="loading">Cargando...</h1> : <ItemList items={items} git />}
        </div>
    )   
}

export default ItemListContainer;
