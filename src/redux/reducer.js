import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeFromCart, login, logout } from "./actions";

export const carsReducer = createReducer([], {
  [addToCart]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeFromCart]: (state, action) =>
    state.filter(({ uniqueId }) => uniqueId !== action.payload),
});

export const authReducer = createReducer(
  { isAuth: false },
  {
    [login]: (state, { payload }) => {
      return { ...state, isAuth: true, ...payload };
    },

    [logout]: (_, { payload }) => {
      return { isAuth: false, ...payload };
    },
  }
);
