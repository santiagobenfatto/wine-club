import React from 'react';
import NavBar from './componentes/NavBar';
import Main from './componentes/Main';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Main />
    </BrowserRouter>
  );
}

export default App;
