import { useState, useContext, useEffect } from "react";
import { FILTER } from "../../../reducers/actions";
import { productsList } from "../../../../context/productContext";

const MainLogic = () => {
  const [value, setValue] = useState([100, 200]);
  const [minMax, setMinMax] = useState([]);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const {
    state: { products, currency },
    dispatch
  } = useContext(productsList);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  const minnMax = () => {
    const price = products.map((e) => e.price);

    setMinMax([
      Math.floor(Math.min(...price)) * currency.value,
      Math.ceil(Math.max(...price)) * currency.value
    ]);
  };
  useEffect(() => {
    minnMax();
  }, [currency]);
  const applyRange = (range) => {
    setData(
      products.filter((p) => {
        if (
          p.price * currency.value >= range[0] &&
          p.price * currency.value <= range[1]
        )
          return p;
      })
    );
    setModalShow(false);
  };
  useEffect(() => {
    dispatch({
      type: FILTER,
      payload: data
    });
  }, [data]);
  useEffect(() => {
    minnMax();
  }, [products]);
  return {
    currency,
    value,
    setValue,
    minMax,
    rangeSelector,
    applyRange,
    modalShow,
    setModalShow
  };
};
export default MainLogic;
