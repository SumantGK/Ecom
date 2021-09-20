import React, { useReducer, createContext } from "react";
import Reducer from "../js/reducers/index";
import { initialValues } from "./initialValues";

export const productsList = createContext();

export const ProductContext = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialValues);
  return (
    <productsList.Provider value={{ state, dispatch }}>
      {props.children}
    </productsList.Provider>
  );
};
