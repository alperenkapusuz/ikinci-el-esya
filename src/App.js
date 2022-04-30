import React from 'react'
import Navi from './components/Navbar/Navi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/Product/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Navi/>
      <Routes>
      <Route path="ads" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
