import "./css/sidebar.css";
import { PriceRange, PriceSort } from "../../components";

const Sidebar = () => {
  return (
    <>
      <div className="filter-options">
        <div className="filter-price-sort">
          <PriceSort />
        </div>
        <div className="filter-price-range">
          <PriceRange />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
