import React, {useState} from 'react';




const ItemCount = ({agregarCantidad, inicio}) => {
    
    const [count, setCount] = useState(inicio)
    
    const suma = () => {
        setCount(count + 1)
    }
    const resta = () => {
        if(count > 0){
            setCount(count -1)
        }
        else{
            console.log("you can't buy less than one.")
        }
    }

    const confirmarCantidad = () => {
        agregarCantidad(count)
    }
    
    return (
    <div>
        <h4>Unidades:</h4>
            
        <div className='counter-box'>

            <button className='counter-btn' onClick={suma}> + </button>

            <p className='counter-num'>{count}</p>

            <button className='counter-btn' onClick={resta} > - </button>

        </div>
        <button className='confirm-btn' onClick={confirmarCantidad}>Confirmar</button>
    </div>

    )
}

export default ItemCount;
