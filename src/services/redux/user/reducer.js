import types from "./types";

const initialState = {
  isLogin: false,
  loginData: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginDetail:
      return {
        ...state,
        isLogin: true,
        loginData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
