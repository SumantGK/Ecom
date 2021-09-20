import Sidebar from "../sidebar";
import ProductPage from "./productPage";
import Header from "../header";
import "./css/style.css";
const ProductList = () => {
  return (
    <>
      <Header />
      <div className="product-page">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <ProductPage />
        </div>
      </div>
    </>
  );
};
export default ProductList;
