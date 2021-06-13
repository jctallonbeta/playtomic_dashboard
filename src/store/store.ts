import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [reduxThunk],
  });
};

const store = createStore();
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type TSDispath = typeof store.dispatch;
