import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Search from "../Search/Search";

const ProductList = (props) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }

  return (
    <div>
      <div>
        <Search searchCategory={searchCategory} setSearchCategory={setSearchCategory} searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      </div>
      <div>
        {props.items
          .filter((e) =>
            e.category.toLocaleLowerCase().includes(searchCategory.toLocaleLowerCase())
          )
          .filter((p) =>
          p.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase()),
          )
          .map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
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
