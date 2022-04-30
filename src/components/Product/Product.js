import React,{useState} from 'react'
import DUMMY_PRODUCTS from "../Data/Data"
import ProductList from './ProductList'

const Product = () => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS) 

  return (
    <div>
        <ProductList items={products}/>
    </div>
  )
}

export default Product