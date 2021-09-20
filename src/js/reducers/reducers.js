export const addToCart = (state, action) => {
  // console.log(action.payload);
  return {
    ...state,
    cart: [...state.cart, action.payload]
  };
};

export const removeFromCart = (state, { payload }) => {
  return {
    ...state,
    cart: state.cart.filter((cart) => !(cart.id === payload))
  };
};
export const filter = (state, action) => {
  // console.log("filter ", action.payload);
  return {
    ...state,
    filter: [...action.payload]
  };
};
export const colorChange = (state, action) => {
  return {
    ...state,
    colors: action.payload
  };
};
export const currencyChange = (state, action) => {
  return {
    ...state,
    currency: action.payload
  };
};
export const cart_count = (state, action) => {
  console.log("filter ", action.payload);
  return {
    ...state,
    cart: [
      ...state.cart.map((it) => {
        if (it.id === action.payload[0]) {
          it.count = action.payload[1];
          return it;
        } else {
          return it;
        }
      })
    ]
  };
};
