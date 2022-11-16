import React from 'react';
import {useState, createContext} from 'react';



export const contexto = createContext()//Se crea el CONTEXTO global (vacío en este caso)

const {Provider} = contexto




const ContextProvider = ({children}) => {
        const [carrito, setCarrito] = useState([
            {id:1, nombre:"Remeras", precio:100, cantidad:2},
            {id:2, nombre:"Pantalones", precio:200, cantidad:1}
        ])
        
        const [total, setTotal] = useState(7)
       
        
        const vaciarCarrito = () => {
            setCarrito([])
            setTotal(0)
        }
        const valorDelContexto = {
            productos: carrito,
            cantidad: total,
            vaciarCarrito : vaciarCarrito
        }
    
        return (
            <Provider value={valorDelContexto}>
                {children}
            </Provider>
        );
}

export default ContextProvider;
