import React, { useState } from "react";

function Add({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.01);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const validName = (name) => {
    return name.trim().length > 0 && name.trim().length < 2 ? false : true;
  };
  const validPrice = (price) => {
    return price > 0;
  };

  const addProducts = () => {
    if (!validName(name)) {
      alert("Please enter a valid product name.");
      return;
    }
    if (!validPrice(price)) {
      alert("Please enter a valid product price.");
    }
    const newProduct = { name, price };
    onAdd(newProduct);
    setName("");
    setPrice(0.01);
  };

  return (
    <div className="add">
      <React.Fragment>
        <label>Product name</label>
        <input value={name} onChange={changeName} type="text" />
      </React.Fragment>
      <React.Fragment>
        <label>Product price</label>
        <input
          value={price}
          onChange={changePrice}
          onBlur={changePrice}
          type="number"
        />
      </React.Fragment>
      <button onClick={addProducts} type="button">
        Add
      </button>
    </div>
  );
}
export default Add;
