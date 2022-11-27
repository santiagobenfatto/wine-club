import React from 'react';
import NavBar from './componentes/NavBar';
import Main from './componentes/Main';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './componentes/ContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ContextProvider>
    <BrowserRouter>
    <NavBar />
    <Main />
    <ToastContainer limit={3} toastStyle={{ backgroundColor: "black" }}/>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
