// Root reducer là nơi tổng hợp các reducer con.

// combineReducers kết hợp các child reducers.
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
