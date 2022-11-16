import React from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { contexto } from './ContextProvider';

const ItemDetail = ({title, detail, price, img}) => {
    const valorDelContexto = useContext(contexto)
    return (
        <>
            <img src={img} alt={title} className='img-detail' />
            <div className='contenedor-precio-titulo-detail'>
            <h2 className='detail-title'>{title} - ${price}</h2>
            <p>{detail}</p>
            <ItemCount/>
            {/*falta boton confirmar*/}
            </div>
        </>
    );
}

export default ItemDetail;
