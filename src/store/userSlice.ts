import {IDish} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {addOrder} from "./userThuck";

interface UserState {
    dishes:IDish[];
    totalPrice:number;
    loading:boolean;
    error:boolean;
}

const initialState:UserState = {
    dishes:[],
    totalPrice:0,
    loading:false,
    error:false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUserDish(state,action){
            const findItem = state.dishes.find(
                (item) => item.id === action.payload.id,
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.dishes.push({ ...action.payload, count: 1 });
            }

            state.totalPrice = state.dishes.reduce((acc, value) => {
                return acc + (+value.price) * value.count;
            }, 0);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addOrder.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(addOrder.fulfilled,(state)=>{
            state.loading = false;
        });
        builder.addCase(addOrder.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        });
    }

});

export const {addUserDish} = userSlice.actions;
export const userReducers = userSlice.reducer;