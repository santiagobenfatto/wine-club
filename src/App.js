import React from 'react';
import NavBar from './componentes/NavBar';
import Main from './componentes/Main';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './componentes/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
    <BrowserRouter>
    <NavBar />
    <Main />
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
