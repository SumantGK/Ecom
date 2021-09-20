import * as Reducers from "./reducers";
import * as Actions from "./actions";

const actionMap = {
  [Actions.ADD_TO_CART]: Reducers.addToCart,
  [Actions.REMOVE_FROM_CART]: Reducers.removeFromCart,
  [Actions.FILTER]: Reducers.filter,
  [Actions.CART_COUNT]: Reducers.cart_count,
  [Actions.CURRENCY]: Reducers.currencyChange,
  [Actions.COLOR]: Reducers.colorChange
};
const Reducer = (state, action) => {
  return actionMap[action.type] ? actionMap[action.type](state, action) : state;
};

export default Reducer;
