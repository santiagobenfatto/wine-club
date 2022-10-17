import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hola, soy un Greeting"/>
    </>
  );
}

export default App;
