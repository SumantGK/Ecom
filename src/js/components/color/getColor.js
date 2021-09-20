import Colors from "../../../jsonData/colors.json";

const getColor = (id) => {
  // console.log(id);
  return (
    Colors.find((cl) => cl.id === id) || { css: { backgroundColor: "green" } }
  );
};
export default getColor;
