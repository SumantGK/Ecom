import "./css/cartItems.css";
import { Price } from "../../components";
import CartItemLogic from "./logic/cartItemLogic";
import { useEffect } from "react";
const CartItems = ({ item }) => {
  const {
    cartCount,
    removeFromCart,
    setItem,
    itemData,
    setCartCount
  } = CartItemLogic();
  useEffect(() => {
    setItem(item);
    setCartCount(item.count);
  }, [item]);

  return (
    <div class="card">
      <div class="card-head">
        <img src={itemData.image} class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <span class="card-title">{itemData.title}</span>
        <div>
          Price:
          <Price
            price={itemData.price}
            cart={cartCount}
            discount={itemData.discount}
          />
        </div>
        <div>
          <button
            className="change-btn"
            style={{ display: "inline" }}
            onClick={(e) => setCartCount(cartCount - 1)}
          >
            -
          </button>
          <span className="cart-count">{cartCount}</span>
          <button
            className="change-btn"
            onClick={(e) => setCartCount(cartCount + 1)}
            style={{ display: "inline" }}
          >
            +
          </button>
        </div>
      </div>
      <div className="card-foot">
        <span onClick={(e) => removeFromCart(itemData.id)}>REMOVE</span>
      </div>
    </div>
  );
};
export default CartItems;
