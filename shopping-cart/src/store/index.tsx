import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  products: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
