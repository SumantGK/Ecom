import { GetColor } from "../../components";
// import { productsList } from "../../../context/productContext";
export const BackGroundInfo = (index, colorid) => {
  // console.log(colorid);
  const colors = GetColor(colorid);
  // console.log(colors);
  return colors;
};
