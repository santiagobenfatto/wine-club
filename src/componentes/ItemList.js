import React from 'react';
import Item from './Item';



{/* EL ITEMS DE LOS PARAMS VIENE DEL ITEMLISTCONTAINER:D */}
const ItemList = ({items}) => {
    return (
        <div className='contenedor-items'>
        {
            items.map((item)=>{
                return <Item key={item.id} {...item}/>
            })
        }
        </div>
    )
   

}


export default ItemList;
