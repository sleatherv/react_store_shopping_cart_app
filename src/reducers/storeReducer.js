const initialState = {
  products: [{ id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' },
  { id: 4, name: 'Product D' }],

  cart: []
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      const { name, idProductToAdd } = action;
      if (state.cart.length === 0) {
        return {
          ...state,
          cart: [{ id: idProductToAdd, name: name, qty: 1 }]
        }
      } else {
        // clone the cart array
        const newCart = [...state.cart];
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
                name: name,
                qty: currentQty + 1
              }
            }
          });
        } else {
          newCart.push({
            id: idProductToAdd,
            name: name,
            qty: 1
          })
        }
        //Updating the cart
        return {
          ...state,
          cart: newCart
        };
      }
      break;
    default:
      return state;
      break;
  }
}

export default reducer;