import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Search from "../Search/Search";

const ProductList = (props) => {
  const [search, setSearch] = useState("");

  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }

  return (
    <div>
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div>
        {props.items
          .filter((p) =>
            p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((product) => (
            <ProductItem
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              place={product.place}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
