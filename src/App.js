import React, { useEffect, useState } from 'react'
import Navi from './components/Navbar/Navi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DUMMY_PRODUCTS from "./components/Data/Data"
import ProductList from './components/Product/ProductList'
import ProductAdd from './components/ProductAdd/ProductAdd';
//import Deneme from './components/ProductAdd/Deneme';


const App = () => {

  const [products, setProducts] = useState([]) 

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    setProducts(JSON.parse(localData));
  };

  return (
    <BrowserRouter>
      <Navi/>
      <Routes>
        <Route path="/addItem" element={<ProductAdd/>} />
        <Route path="/ads" element={<ProductList items={products}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
