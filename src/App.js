import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Holis, soy un Greeting"/>
    </>
  );
}

export default App;
