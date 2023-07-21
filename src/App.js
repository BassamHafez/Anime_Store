import React from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Cart from './Components/Cart/Cart.js';
import CartContextProvider from './Store/CartContextProvider.js';

function App() {
  return (
    <CartContextProvider>
        <Cart/>
        <Home/>
    </CartContextProvider>
  );
}

export default App;
