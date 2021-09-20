import { useState, useContext, useEffect } from "react";
import { productsList } from "../../../context/productContext";
import { CURRENCY } from "../../reducers/actions";
import currencyData from "../../../jsonData/currency.json";
const Currency = () => {
  const {
    state: { currency: currentCurrency },
    dispatch
  } = useContext(productsList);

  const [currency, setCurrency] = useState(currentCurrency);
  const currencyChanged = (curr) => {
    setCurrency(
      currencyData.find((ct) => {
        if (ct.currency === curr) {
          return { ct };
        }
      }) || "Invalid"
    );
    // setCurrency({ symbol: symbol, value: value });
  };
  useEffect(() => {
    dispatch({
      type: CURRENCY,
      payload: currency
    });
  }, [currency]);
  return (
    <>
      <select
        name="currencies"
        onChange={(e) => currencyChanged(e.target.value)}
      >
        {currencyData.map((c) => {
          if (c.currency === currency.currency) {
            return (
              <option key={c.currency} value={c.currency} selected>
                {c.currency}
              </option>
            );
          }
          return (
            <option key={c.currency} value={c.currency}>
              {c.currency}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Currency;

// currency
// bg colors
// bg colors fibonacci
// cred Option
