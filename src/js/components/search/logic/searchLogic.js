import { useContext, useEffect, useState } from "react";
import { FILTER } from "../../../reducers/actions";
import { productsList } from "../../../../context/productContext";
const SearchLogic = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [searchedData, setSearched] = useState([]);
  const {
    state: { products },
    dispatch
  } = useContext(productsList);
  const prods = JSON.parse(JSON.stringify(products));
  const search = () => {
    setSearched([
      ...prods.filter((el) =>
        el.title.toLowerCase().includes(searchTxt.toLowerCase())
      )
    ]);
  };
  useEffect(() => {
    dispatch({
      type: FILTER,
      payload: [...searchedData]
    });
  }, [searchedData]);
  return {
    searchTxt,
    setSearchTxt,
    searchedData,
    setSearched,
    search
  };
};
export default SearchLogic;
