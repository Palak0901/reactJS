import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerUser/reducer";
import userReducer from "./user/reducer";

const RootReducer = combineReducers({
  userReducer: userReducer,
  registerReducer: registerReducer,
});

export default RootReducer;
