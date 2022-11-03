import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({title, price, img, id }) => {
    
    return (
        <div className='card'>
            <p className='item-title'>{title} ${price}</p>
            <img className='img-card'src={img} alt={title} />
            <button className='btn-details'>
                <Link to={`/item/${id}`} className='btn-productos'>
                    Ver mas...
                </Link>
            </button>
        </div>
    )
}

export default Item;
