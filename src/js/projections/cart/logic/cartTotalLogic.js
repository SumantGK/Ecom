import { useState, useEffect } from "react";
const CartTotalLogic = () => {
  const [total, setTotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [data, setData] = useState([]);
  const totalPriceCalc = () => {
    const prices = data.map((ac) => ac.price * ac.count);
    return prices.reduce((ac, ct) => {
      return (ac = ac + ct);
    });
  };
  const totalDiscountCalc = () => {
    const discounts = data.map(
      (ac) => ((ac.price * ac.discount) / 100).toFixed(2) * ac.count
    );
    return discounts.reduce((ac, at) => (ac = ac + at));
  };
  useEffect(() => {
    if (data.length > 0) {
      const totalPrice = totalPriceCalc();
      const allDiscount = totalDiscountCalc();
      setTotal(totalPrice.toFixed(2));
      setTotalDiscount(allDiscount.toFixed(2));
    }
  }, [data]);
  return {
    total,
    totalDiscount,
    setData,
    data
  };
};
export default CartTotalLogic;
