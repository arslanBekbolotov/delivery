import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchOrders} from "./ordersThuck";
import {RootState} from "../app/store";
import {IApiOrdersResponse} from "../types";

interface OrdersState{
    orders:IApiOrdersResponse[];
    loading:boolean;
    error:boolean;
}

const initialState:OrdersState = {
    orders:[],
    loading:false,
    error:false,
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state,{payload:orders}) => {
            state.loading = false;
            if(orders) state.orders = orders;
        });
        builder.addCase(fetchOrders.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});
export const selectOrders = (state:RootState)=>state.ordersList.orders;
export const orderReducers = ordersSlice.reducer;