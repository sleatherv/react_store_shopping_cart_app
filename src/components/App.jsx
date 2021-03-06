
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Store from './Store'
import Error404 from './Error404'
import ShoppingCart from './ShoppingCart';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' }
  ];
  const [cart, changeCart] = useState([]);

  const addProductToCart = (idProductToAdd, productName) => {
    if (cart.length === 0) {
      changeCart([{
        id: idProductToAdd,
        name: productName,
        qty: 1
      }
      ]);
    } else {
      // clone the cart array
      const newCart = [...cart];
      // We verify that the cart have the item
      const itemInCart = newCart.filter((cartProduct) => {
        return cartProduct.id === idProductToAdd
      }).length > 0;
      // if itemInCart is True, we have to update it
      if (itemInCart) {
        // search item position in array
        newCart.forEach((cartProduct, index) => {
          if (cartProduct.id === idProductToAdd) {
            const currentQty = newCart[index].qty;
            newCart[index] = {
              id: idProductToAdd,
              name: productName,
              qty: currentQty + 1
            }
          }
        });

      } else {
        newCart.push({
          id: idProductToAdd,
          name: productName,
          qty: 1
        })
      }
      //Updating the cart
      changeCart(newCart);
    }
  }

  return (
    <Container>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/store">Store</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/store">
            <Store
              products={products}
              addProductToCart={addProductToCart}></Store>
          </Route>
          <Route component={Error404}></Route>
        </Switch>
      </main>
      <aside>
        <ShoppingCart cart={cart}></ShoppingCart>
      </aside>
    </Container>
  );
}

export default App;


const Container = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;