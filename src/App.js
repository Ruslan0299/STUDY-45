import React, { useState } from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App() {
  const [products, setProducts] = useState([
    { name: "Iphone", price: 800, id: 1 },
    { name: "Watch", price: 100, id: 2 },
  ]);

  const addProduct = (newProduct) => {
    let key = Math.random();
    setProducts((prev) => [...prev, { ...newProduct, id: key }]);
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <Add onAdd={addProduct} />
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
