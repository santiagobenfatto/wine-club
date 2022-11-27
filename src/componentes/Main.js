import React from 'react';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Compra from './Compra';
import { Routes, Route } from 'react-router-dom';
import CartContainer from './CartContainer';


const Main = () => {
    return (
        <main>
            <Routes>

                <Route path='/' element={<ItemListContainer/>}/>

                <Route path='/productos' element={<ItemListContainer/>}/>

                <Route path='/productos/:category' element={<ItemListContainer/>}/>

                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        
                <Route path='/cart/compra' element={<Compra/>}/>

                <Route path='/cart' element={<CartContainer/>}/>

                <Route path='*' element={<h2>Error 404 - Not Found</h2>}/>

            </Routes>

        </main>
    );
}

export default Main;
