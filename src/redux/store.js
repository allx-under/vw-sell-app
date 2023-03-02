import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer, carsReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};
const combinedReducers = combineReducers({
  cars: carsReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
