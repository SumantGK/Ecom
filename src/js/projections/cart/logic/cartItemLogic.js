import { useEffect, useContext, useState } from "react";
import { productsList } from "../../../../context/productContext";
import { REMOVE_FROM_CART, CART_COUNT } from "../../../reducers/actions";

const CartItemLogic = () => {
  const { dispatch } = useContext(productsList);
  const [itemData, setItem] = useState([]);
  const [cartCount, setCartCount] = useState(itemData.count);
  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    });
  };
  useEffect(() => {
    if (cartCount >= 1) {
      dispatch({
        type: CART_COUNT,
        payload: [itemData.id, cartCount]
      });
    } else if (cartCount === 0) {
      removeFromCart(itemData.id);
    }
  }, [cartCount]);

  return {
    cartCount,
    removeFromCart,
    setItem,
    itemData,
    setCartCount
  };
};
export default CartItemLogic;
