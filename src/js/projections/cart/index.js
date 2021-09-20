import CartTotal from "./cartTotal";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "./cartItems";
import "./css/cartPage.css";
import Arrow from "@material-ui/icons/ArrowBack";
import { Pagination } from "../../common";
import CartMain from "./logic/indexLogic";

const CartPage = () => {
  const { history, ITEMS_PER_PAGE, cartData } = CartMain();
  return (
    <>
      <div className="cart-topbar">
        <div className="back-home" onClick={(e) => history.push("/")}>
          <Arrow />
        </div>
        <div className="back-home">
          <h3>Cart</h3>
        </div>
      </div>
      <div class="cart-container">
        <div className="cart-items">
          {cartData.length > 0 ? (
            <Pagination
              RenderComponent={CartItem}
              data={cartData}
              limit={ITEMS_PER_PAGE}
            />
          ) : (
            <div className="empty-cart">
              <div>Cart is Empty</div>
              <button
                onClick={(e) => history.push("/")}
                className="btn btn-primary"
              >
                Show now
              </button>
            </div>
          )}
        </div>
        <div
          className="cart-items-total"
          style={{
            backgroundColor: "white",
            minHeight: "200px"
          }}
        >
          {cartData.length > 0 ? <CartTotal data={cartData} /> : ""}
        </div>
      </div>
    </>
  );
};
export default CartPage;
