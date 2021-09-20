import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { productsList } from "../../../context/productContext";
import { ADD_TO_CART } from "../../reducers/actions";
import "./css/oneProduct.css";
import { Price } from "../../components";
import ErrorBoundary from "../../../errorBoundary/errorBoundary";
import { BackGroundInfo } from "./getBackgroundInfo";
const OneProduct = ({ item, index }) => {
  const {
    state: { cart, colors: colors },
    dispatch
  } = useContext(productsList);
  const [added, setAdded] = useState(false);
  console.log("get Color", colors);
  //  console.log("BG color", bgcolor.css);
  const addToCart = () => {
    const cart = { id: item.id, count: 1 };
    dispatch({
      type: ADD_TO_CART,
      payload: cart
    });
    setAdded(true);
  };
  useEffect(() => {
    setAdded(
      cart.find((ct) => {
        if (ct.id === item.id) return true;
        return false;
      })
    );
  }, [item]);
  useEffect(() => {
    const bgcolor = BackGroundInfo(index, colors);

    if (document.querySelector(".product-card")) {
      const cards = document.querySelectorAll(".product-card");
      cards.forEach((crd) => {
        Object.assign(crd.style, bgcolor.css);
      });
    }
  }, [colors]);
  const loaded = () => {
    if (document.querySelector("#loading")) {
      document.querySelector("#loading").remove();
    }
  };
  return (
    <ErrorBoundary>
      <div className="product-card" key={item.id}>
        <div className="product-head">
          <div id="loading">Loading...</div>
          <img
            class="product-image"
            src={item.image}
            alt={item.title}
            onLoad={loaded}
          />
        </div>
        <div className="product-body">
          <div className="product-title">{item.title} </div>
          <div className="product-price">
            <Price price={item.price} discount={item.discount} />
          </div>
          {!added ? (
            <button className="product-add-cart" onClick={addToCart}>
              Add to Cart
            </button>
          ) : (
            <span style={{ color: "green" }}>Added to Cart</span>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default OneProduct;
