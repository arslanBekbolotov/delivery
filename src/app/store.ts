import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../store/adminSlice";
import { userReducers } from "../store/userSlice";
import { orderReducers } from "../store/ordersSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducers,
    ordersList: orderReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
