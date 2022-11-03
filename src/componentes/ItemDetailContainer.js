import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getDetailsById } from './utils';



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        
        setItem({})

        getDetailsById(id)
            .then(res=> {
                setItem(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[id])

    return (
        <div className='contenedor-detail'>
        {
         Object.keys(item).length === 0 ? <h1 className='loading'>Cargando...</h1> : <ItemDetail {...item}/>}
        </div>
    );
}

export default ItemDetailContainer;
