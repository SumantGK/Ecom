import { useEffect, useContext } from "react";
import { productsList } from "../../../context/productContext";
import CartTotalLogic from "./logic/cartTotalLogic";
const CartTotal = ({ data }) => {
  const { total, totalDiscount, setData } = CartTotalLogic();
  const {
    state: { currency }
  } = useContext(productsList);
  useEffect(() => {
    setData([...data]);
  }, [data]);
  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <table>
          <thead>
            <tr>
              <th>Price Details</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            <tr>
              <td>Price ({data.length} items) </td>
              <td>
                : {currency.symbol} {(total * currency.value).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>You saved</td>
              <td>
                : {currency.symbol}{" "}
                {(totalDiscount * currency.value).toFixed(2)}
              </td>
            </tr>
            <hr />
            <tr>
              <th>Total Payble</th>
              <th>
                : {currency.symbol}{" "}
                {((total - totalDiscount) * currency.value).toFixed(2)}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartTotal;
