import React from 'react';
import Products from './Products';


const Store = ({ products, addProductToCart }) => {

  return (
    <>
      <h1>Store</h1>
      <Products
        products={products}
        addProductToCart={addProductToCart}
      ></Products>
    </>
  );
}

export default Store;