import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.place}</p>
        <button>
          {/* //<Link to={}>Detay</Link> */}
        </button>
    </div>
  )
}

export default ProductItem