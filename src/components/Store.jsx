import React from 'react';
import Products from './Products';


const Store = ({ addProductToCart }) => {

  return (
    <>
      <h1>Store</h1>
      <Products
        addProductToCart={addProductToCart}
      ></Products>
    </>
  );
}

export default Store;