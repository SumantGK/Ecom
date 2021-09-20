import "./css/style.css";
import SortIcon from "@material-ui/icons/Sort";
import Modal from "react-bootstrap/Modal";
import PriceSortLogic from "./logic/priceSortLogic";
const SortComponent = () => {
  const {
    sort_mobile,
    setSortPattern,
    modalShow,
    setModalShow,
    sorting
  } = PriceSortLogic();

  return (
    <>
      <div className="main-header">
        <strong>Sort by</strong>
        <button className="sort-btn" id="dsc" onClick={(e) => sorting("dsc")}>
          Price --High-Low
        </button>

        <button className="sort-btn" id="asc" onClick={(e) => sorting("asc")}>
          Price --Low-High
        </button>
        <button
          className="sort-btn"
          id="discount"
          onClick={(e) => sorting("discount")}
        >
          Discount
        </button>
      </div>

      <div onClick={() => setModalShow(true)} className="mobile-sort">
        <SortIcon /> Sort
      </div>
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">Sort By</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="radio"
              value="asc"
              name="sort"
              onChange={(e) => setSortPattern(e.target.value)}
            />{" "}
            Price --Low-High
            <br />
            <input
              type="radio"
              value="dsc"
              name="sort"
              onChange={(e) => setSortPattern(e.target.value)}
            />{" "}
            Price --High-Low
            <br />
            <input
              type="radio"
              value="discount"
              name="sort"
              onChange={(e) => setSortPattern(e.target.value)}
            />{" "}
            Discount
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={(e) => setModalShow(false)}>Close</button>
          <button onClick={sort_mobile}>Apply</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SortComponent;
