import { configureStore } from "@reduxjs/toolkit";
import classReducer from "../features/classSlice";
export const store = configureStore({
  reducer: {
    classRecord: classReducer 
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
