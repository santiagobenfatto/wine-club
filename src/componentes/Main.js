import React from 'react';
import CartWidget from './CartWidget';
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

                <Route path='/productos/cart' element={<CartWidget/>}/>

                <Route path='*' element={<h2>Error 404 - Not Found</h2>}/>

            </Routes>

        </main>
    );
}

export default Main;
