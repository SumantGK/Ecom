import { useState, useContext, useEffect } from "react";
import { productsList } from "../../../context/productContext";
import { COLOR } from "../../reducers/actions";
import allColors from "../../../jsonData/colors.json";
const Color = () => {
  const {
    state: { colors },
    dispatch
  } = useContext(productsList);
  const [currentColor, setColor] = useState(colors);
  useEffect(() => {
    dispatch({
      type: COLOR,
      payload: currentColor
    });
  }, [currentColor]);
  const changeColor = (id) => {
    setColor(id);
  };

  return (
    <select onChange={(e) => changeColor(e.target.value)}>
      {allColors.map((cl) => {
        if (cl.id === currentColor) {
          return (
            <option key={cl.id} value={cl.id} selected>
              {cl.color}
            </option>
          );
        }
        return (
          <option key={cl.id} value={cl.id}>
            {cl.color}
          </option>
        );
      })}
    </select>
  );
};
export default Color;
