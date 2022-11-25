import React from 'react';
import {useState, createContext, useContext} from 'react';
export const contexto = createContext()
const {Provider} = contexto

export const useCarrito = () => {
    return useContext(contexto)
}



const ContextProvider = ({children}) => {
        const [carrito, setCarrito] = useState([])        
        const [totalUnidades, setTotalUnidades] = useState(5)

        //const [precioTotal, setPrecioTotal] = useState(0)

        const addToCart = (producto, cantidad) => {
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
        }

        const vaciarCarrito = () => {
            setCarrito([])
            setTotalUnidades(0)
        }

        const valorDelContexto = {
            productos: carrito,
            cantidad: totalUnidades,
            vaciarCarrito: vaciarCarrito,
            addToCart: addToCart, 
        }
    
        return (
            <Provider value={valorDelContexto}>
                {children}
            </Provider>
        );
}

export default ContextProvider;
