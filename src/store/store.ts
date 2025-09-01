import { configureStore } from "@reduxjs/toolkit";
import userData, { counterSlice, booleanData } from "../store/counterSlice";

export const store = configureStore({
  reducer: {
    user: userData,
    count: counterSlice.reducer,
    data: booleanData.reducer,
  },
});

// TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
