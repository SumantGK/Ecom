import Slider from "@material-ui/core/Slider";
import "./css/priceRange.css";
import FilterListIcon from "@material-ui/icons/FilterList";
import Modal from "react-bootstrap/Modal";
import MainLogic from "./logic/mainLogic";
const PriceRange = () => {
  const {
    currency,
    value,
    setValue,
    minMax,
    rangeSelector,
    applyRange,
    modalShow,
    setModalShow
  } = MainLogic();
  return (
    <>
      <div className="box">
        <div id="range-slider" gutterBottom>
          Select Price Range:
        </div>
        <Slider
          value={value}
          max={minMax[1]}
          min={minMax[0]}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
        />
        {currency.symbol}
        {value[0]} to {currency.symbol}
        {value[1]}
        <div>
          <button className="range-btn" onClick={(e) => applyRange(value)}>
            Apply
          </button>
        </div>
      </div>
      <div className="mobile-box" onClick={() => setModalShow(true)}>
        <FilterListIcon /> Filter
      </div>

      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Select Price Range
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="range-slider" gutterBottom></div>
          <Slider
            value={value}
            max={minMax[1]}
            min={minMax[0]}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
          />
          ${value[0]} to ${value[1]}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={(e) => setModalShow(false)}>Close</button>
          <button onClick={(e) => applyRange(value)}>Apply</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PriceRange;
