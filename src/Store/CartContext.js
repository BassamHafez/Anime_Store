import { createContext } from "react";

const CardContext = createContext({
  products: [],
  totalAmount: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
  removeSelectedProduct: (id) => {},
});

export default CardContext;
