import {createAsyncThunk} from "@reduxjs/toolkit";
import {IDish} from "../types";
import {axiosApi} from "../axiosApi";

export const addOrder = createAsyncThunk(
    'user/addOrder',
    async(dishes:IDish[])=>{
        const obj: { [key: string]: number } = {};

        dishes.forEach(dish => {
            obj[dish.id] = dish.count;
        });

        await axiosApi.post('orders.json', obj);
    }
)