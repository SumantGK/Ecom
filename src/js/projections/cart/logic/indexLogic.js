import { useContext, useEffect, useState } from "react";
import { productsList } from "../../../../context/productContext";
import { useHistory } from "react-router-dom";

const CartMain = () => {
  const history = useHistory();
  const {
    state: { products, cart }
  } = useContext(productsList);
  const ITEMS_PER_PAGE = 5;
  const [cartData, setCartData] = useState([]);
  const prods = JSON.parse(JSON.stringify(products));
  useEffect(() => {
    setCartData([
      ...prods.filter((p) => {
        if (
          cart.find((c) => {
            if (c.id === p.id) {
              return (p.count = c.count);
            }
          })
        ) {
          return p;
        }
      })
    ]);
  }, [cart]);
  return {
    history,
    ITEMS_PER_PAGE,
    cartData
  };
};
export default CartMain;
