import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/add');
export const removeFromCart = createAction('cart/remove');

export const login = createAction('auth/login');
export const logout = createAction('auth/logout');
