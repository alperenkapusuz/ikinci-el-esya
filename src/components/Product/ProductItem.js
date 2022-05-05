import React from 'react'

const ProductItem = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.place}</p>
    </div>
  )
}

export default ProductItem