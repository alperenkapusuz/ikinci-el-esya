import React, { useEffect, useState } from 'react'
import Navi from './components/Navbar/Navi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DUMMY_PRODUCTS from "./components/Data/Data"
import ProductList from './components/Product/ProductList'
import ProductAdd from './components/ProductAdd/ProductAdd';
import Error from './components/Error/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';
//import DUMMY_PRODUCTS from './components/Data/Data';


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
        <Route path="/ads/:p_id" element={<ProductDetail items={products}/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
