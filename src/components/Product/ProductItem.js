import React from 'react'

const ProductItem = (props) => {
  return (
    <div>
        <ul>
            <li>{props.title}</li>
            <li>{props.description}</li>
            <li>{props.price}</li>
            <li>{props.place}</li>
        </ul>
    </div>
  )
}

export default ProductItem