import { useContext } from "react";
import { productsList } from "../../../context/productContext";
import "./css/productPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { OneProduct, Pagination } from "../../common/";
import { PriceSort } from "../../components";

const ProductPage = () => {
  const {
    state: { filter }
  } = useContext(productsList);
  const filterdata = JSON.parse(JSON.stringify(filter));
  const ITEMS_PER_PAGE = 8;
  return (
    <>
      <div className="sort-option">
        <PriceSort />
      </div>
      <Pagination
        data={[...filterdata]}
        RenderComponent={OneProduct}
        limit={ITEMS_PER_PAGE}
      />
    </>
  );
};
export default ProductPage;
