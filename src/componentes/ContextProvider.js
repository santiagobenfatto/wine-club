import React from 'react';
import {useState, createContext, useContext} from 'react';
export const contexto = createContext()
const {Provider} = contexto

export const useCarrito = () => {
    return useContext(contexto)
}

const ContextProvider = ({children}) => {
        const [carrito, setCarrito] = useState([])        
        const [precioTotal, setPrecioTotal] = useState(0)
        const [unidades, setUnidades] = useState(0)


        const addToCart = (producto, cantidad) => {          
            
            const isInCart = carrito.find(prod=> prod.id === producto.id)
            
            if(isInCart){
                setCarrito(carrito.map((element) => {
                    if(element.id === isInCart.id) {
                        return {...isInCart, cantidad: isInCart.cantidad + cantidad}
                    }else return element
                }))
            } else {
            setCarrito([
                ...carrito,
                { ...producto, cantidad}
            ])
        }
        setUnidades(unidades + cantidad)
        setPrecioTotal(precioTotal + producto.price * cantidad)
        }


        const vaciarCarrito = () => {
            setCarrito([])
            setUnidades(0)
            setPrecioTotal(0)
        }

        const valorDelContexto = {
            productos: carrito,
            cantidad: unidades,
            precioTotal: precioTotal,
            vaciarCarrito: vaciarCarrito,
            addToCart: addToCart
        }

        return (
            <Provider value={valorDelContexto}>
                {children}
            </Provider>
        );
}

export default ContextProvider;
