import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosApi} from "../axiosApi";
import {IApiOrdersResponse, IOrdersApi, TDishMutation} from "../types";

export const fetchOrders = createAsyncThunk<IApiOrdersResponse[] | null,undefined>(
    'orders/fetch',
    async () => {
        const { data } = await axiosApi<IOrdersApi | null>('orders.json');
        if (data) {
            const orders = [];
            const newOrders = Object.keys(data).map(key => ({ ...data[key] }));

            for (let item of newOrders) {
                const newItem = Object.keys(item).map(key => ({ count: item[key], id: key }));
                orders.push(newItem);
            }

            return await Promise.all(
                orders.map(async (orderItem) => {
                    return Promise.all(orderItem.map(async (order) => {
                        const {data} = await axiosApi<TDishMutation | null>(`dishes/${order.id}.json`);
                        return data ? {...data, id: order.id, count: order.count} : null;
                    }));
                })
            );
        }

        return null;
    }
);

export const completeOrder = createAsyncThunk(
    "orders/delete",
    async(id:string)=>{
        await axiosApi.delete(`orders/${id}.json`);
    }
);

