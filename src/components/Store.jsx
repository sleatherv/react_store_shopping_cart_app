import React from 'react';
import Products from './Products';


const Store = ({ products }) => {

  return (
    <>
      <h1>Store</h1>
      <Products products={products}></Products>
    </>
  );
}

export default Store;