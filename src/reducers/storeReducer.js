const initialState = {
  products: [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' }
  ],
  shoppingCart: [1, 2, 3]
};

const reducer = (state = initialState, action) => {
  return state;
}

export default reducer;