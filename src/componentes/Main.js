import React from 'react';
import Cart from './Cart';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';


const Main = () => {
    return (
        <main>
            <Routes>

                <Route path='/' element={<ItemListContainer/>}/>

                <Route path='/productos' element={<ItemListContainer/>}/>

                <Route path='/productos/:category' element={<ItemListContainer/>}/>

                <Route path='/item/:id' element={<ItemDetailContainer/>}/>

                <Route path='/cart' element={<Cart/>}/>

                <Route path='*' element={<h2>Error 404 - Not Found</h2>}/>

            </Routes>

        </main>
    );
}

export default Main;
