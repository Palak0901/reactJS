import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/reducer";

const RootReducer = combineReducers({
  userReducer: userReducer,
});

export default RootReducer;
