import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import searchSliceReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchSliceReducer
  },
});
