import { createSlice } from "@reduxjs/toolkit";
import { completeOrder, fetchOrders } from "./ordersThuck";
import { RootState } from "../app/store";
import { IApiOrdersResponse } from "../types";

interface OrdersState {
  orders: IApiOrdersResponse[];
  loading: boolean;
  error: boolean;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: false,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, { payload: orders }) => {
      state.loading = false;
      if (orders) {
        state.orders = orders;
      } else {
        state.orders = [];
      }
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(completeOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(completeOrder.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(completeOrder.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectOrders = (state: RootState) => state.ordersList.orders;
export const selectLoading = (state: RootState) => state.ordersList.loading;
export const orderReducers = ordersSlice.reducer;
