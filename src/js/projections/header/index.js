import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./css/header.css";
import { productsList } from "../../../context/productContext";
import { FILTER } from "../../reducers/actions";
import { CartIcon } from "../../components";
import { Search, Color } from "../../components";
import { Currency } from "../../common";
import StarIcon from "@material-ui/icons/Star";

const Header = () => {
  const {
    state: { products },
    dispatch
  } = useContext(productsList);
  const prods = JSON.parse(JSON.stringify(products));
  const history = useHistory();
  const toCartPage = () => {
    history.push("/cart");
  };
  const resetData = () => {
    dispatch({
      type: FILTER,
      payload: [...prods]
    });
  };
  return (
    <>
      <div className="topbar">
        <div className="home" onClick={resetData}>
          <StarIcon />
        </div>

        <div className="search-bar" style={{ padding: "10px" }}>
          <Color />
        </div>
        <div className="search-bar" style={{ padding: "10px" }}>
          <Currency />
        </div>
        <div className="search-bar" style={{ padding: "10px" }}>
          <Search />
        </div>
        <div
          className="cart-bar"
          onClick={toCartPage}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          <CartIcon />
        </div>
      </div>
    </>
  );
};
export default Header;
