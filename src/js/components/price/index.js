import { useContext, useEffect } from "react";
import "./css/style.css";
import { productsList } from "../../../context/productContext";
const Price = ({ price, discount, cart = 1 }) => {
  const {
    state: { currency }
  } = useContext(productsList);
  const discountCalc = () => {
    if (discount > 0) {
      return (
        (price - (price * discount) / 100).toFixed(2) *
        cart *
        currency.value
      ).toFixed(2);
    }
    return (price * cart * currency.value).toFixed(2);
  };
  useEffect(() => {
    console.log("From price", currency);
  }, [currency]);
  return (
    <>
      <div className="prices-info">
        <div className="price">
          {currency.symbol} {discountCalc()}
        </div>
        {discount > 0 ? (
          <>
            <div className="ori-price">
              {currency.symbol} {(price * cart * currency.value).toFixed(2)}
            </div>
            <div className="discount">{discount} % off</div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Price;
