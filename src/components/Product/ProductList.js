import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }

  return (
    <div>
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          place={product.place}
        />
      ))}
    </div>
  );
};

export default ProductList;
