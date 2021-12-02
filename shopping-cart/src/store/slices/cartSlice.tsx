import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { Product } from "../../types/product";

interface CartSliceState {
  products: Product[];
}

const initialState: CartSliceState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload];
    },
    populateProductList: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
  },
});

export const { addProducts, populateProductList } = cartSlice.actions;

export default cartSlice.reducer;

export const productsSelector = (state: RootState) => state.products;

export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const response: any = await fetch("http://localhost:5000/products");
      const products: Product[] = await response.json();
      console.log(products);
      dispatch(populateProductList(products));
    } catch (err) {
      console.log(err);
    }
  };
}
