import products from "../jsonData/products.json";

export const initialValues = {
  products,
  filter: [...products],
  currency: { currencytype: "USD", value: 1, symbol: "$" },
  cart: [],
  colors: "colorNone"
};
