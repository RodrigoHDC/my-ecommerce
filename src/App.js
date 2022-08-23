import './App.css';
import React from 'react';
// Importamos las funciones de React-Router-Dom:
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importamos los componentes creados:
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
// import FormValidation from './components/Form/FormValidation';
import Form from './components/Formu';
import Success from './components/Success';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
          {/* <Route index element={<h1>Esto es el home</h1>} /> */}
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/category/:name/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />} />
            <Route path="/success" element={<Success />} />
            
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;