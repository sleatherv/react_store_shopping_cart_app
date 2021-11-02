import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';


const ShoppingCart = ({ cart }) => {

  return (
    <>
      <h3>Shopping Cart</h3>
      {cart.length > 0 ?
        cart.map((product, index) => {
          return (
            <Product key={index}>
              <ProductName>{product.name}</ProductName>
              Quantity: {product.qty}
            </Product>
          )
        })
        :
        <p>You have not added products to the cart</p>
      }
    </>
  );
}

const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const ProductName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`
const mapStateToProps = (state) => ({
  cart: state.shoppingCart
})


export default connect(mapStateToProps)(ShoppingCart);