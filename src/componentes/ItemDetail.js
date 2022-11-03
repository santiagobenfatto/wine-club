import React from 'react';


const ItemDetail = ({title, detail, price, img}) => {
    return (
        <>
            <img src={img} alt={title} className='img-detail' />
            <div className='contenedor-precio-titulo-detail'>
            <p>{title} - ${price}</p>
            <p>{detail}</p>
            <button className='btn-contador'>Contador</button>
            </div>
        </>
    );
}

export default ItemDetail;
