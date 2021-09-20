import React, { useContext, useEffect, useState } from "react";
import { productsList } from "../../../context/productContext";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const CartIcon = () => {
  const {
    state: { cart }
  } = useContext(productsList);
  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart.length]);
  return (
    <Badge color="secondary" badgeContent={cartLength}>
      <ShoppingCartIcon />{" "}
    </Badge>
  );
};
export default CartIcon;
