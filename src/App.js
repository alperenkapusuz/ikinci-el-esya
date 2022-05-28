import React, { useEffect, useState } from 'react'
import Navi from './components/Navbar/Navi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './components/Product/ProductList'
import ProductAdd from './components/ProductAdd/ProductAdd';
import Error from './components/Error/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';
import DUMMY_PRODUCTS from './components/Data/Data';
import Chat from './components/SendMessage/Chat';


const App = () => {

  const [products, setProducts] = useState([]) 
  
  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if(localData.length===0){
      localData.push(...DUMMY_PRODUCTS)
      setProducts(localData);
    }else{
      setProducts(JSON.parse(localData));
    } 
  };

  console.log(products)

  return (
    <BrowserRouter>
      <Navi/>
      <Routes>
        <Route path="/addItem" element={<ProductAdd/>} />
        <Route path="/" element={<ProductList items={products}/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/:p_id" element={<ProductDetail items={products}/>} /> 
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
