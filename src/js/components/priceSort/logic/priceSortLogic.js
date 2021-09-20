import { useState, useContext, useEffect } from "react";
import { FILTER } from "../../../reducers/actions";
import { productsList } from "../../../../context/productContext";
const PriceSortLogic = () => {
  const {
    state: { filter: filtter },
    dispatch
  } = useContext(productsList);

  const [sortPattern, setSortPattern] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [sorted, setSorted] = useState([...filtter]);
  const compareAsc = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };
  const compareDsc = (a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  };

  const sorting = (asort) => {
    document.querySelectorAll(".sort-btn").forEach((ele) => {
      ele.style.color = "black";
    });
    if (asort === "asc") {
      document.getElementById("asc").style.color = "var(--primary)";
      setSorted([...filtter.sort(compareAsc)]);
    } else if (asort === "dsc") {
      document.getElementById("dsc").style.color = "var(--primary)";
      setSorted([...filtter.sort(compareDsc)]);
    } else if (asort === "discount") {
      document.getElementById("discount").style.color = "var(--primary)";
      setSorted([...filtter.filter((ele) => ele.discount > 0)]);
    }
  };
  const sort_mobile = () => {
    sorting(sortPattern);
    setModalShow(false);
  };
  useEffect(() => {
    dispatch({
      type: FILTER,
      payload: sorted
    });
  }, [sorted]);

  return {
    sort_mobile,
    setSortPattern,
    sortPattern,
    modalShow,
    setModalShow,
    sorted,
    setSorted,
    sorting
  };
};
export default PriceSortLogic;
