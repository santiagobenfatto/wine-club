import React, {useState} from 'react';




const ItemCount = () => {
    
    const [count, setCount] = useState(0)
    const addProdcuct = () => {
        setCount(count + 1)
    }
    const subtractProcut = () => {
        if(count > 0){
            setCount(count -1)
        }
        else{
            console.log("you can't buy less than one.")
        }
    }
    const confirmarCarrito = (e) => {
        console.log(e.target)
    }
    
    
    return (
    <div>
        <h4>Unidades:</h4>
            
        <div className='counter-box'>

            <button className='counter-btn' onClick={addProdcuct}> + </button>

            <p className='counter-num'>{count}</p>

            <button className='counter-btn' onClick={subtractProcut} > - </button>



        </div>
        <button className='confirm-btn' onClick={confirmarCarrito}>Confirmar</button>
    </div>

    )
}

export default ItemCount;
