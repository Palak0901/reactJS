import types from "./types";

export const RegisterDetail = (payload) => ({
  type: types.registerDetail,
  payload,
});

export const LoginDetail = (payload) => ({
  type: types.loginDetail,
  payload,
});
