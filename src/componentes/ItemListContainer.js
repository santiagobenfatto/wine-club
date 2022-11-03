import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategoryId } from "./utils";


const ItemListContainer = () => {
    
    const [items, setItems] = useState([]) 

    const {category} = useParams() 

    useEffect(() => {

        setItems([])

        if(category){
            getProductsByCategoryId(category) 
            .then(res => {
                setItems(res)
            })
            .catch(err => {
                console.log(err)
            })

        }else{

            getProducts()
            .then((respuesta) => {
                setItems(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }, [category])

    return (
        <div className='contenedor'>
            <h1>Productos</h1>
            {items.length == 0 ? <h1 className="loading">Cargando...</h1> : <ItemList items={items} />}
        </div>
    )   

}

export default ItemListContainer;
