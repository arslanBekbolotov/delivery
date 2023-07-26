import {IDish} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {addOrder} from "./userThuck";
import {RootState} from "../app/store";

interface UserState {
    dishes:IDish[];
    totalPrice:number;
    loading:boolean;
    error:boolean;
    isVisible:boolean;
}


const initialState:UserState = {
    dishes:[],
    totalPrice:0,
    loading:false,
    error:false,
    isVisible:false,
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
        },
        deleteUserDish(state,{payload:id}){
            state.dishes = state.dishes.filter(dish=>dish.id !== id);
            state.totalPrice = state.dishes.reduce((acc, value) => {
                return acc + (+value.price) * value.count;
            }, 0);
        },
        increase(state,{payload:id}){
            const findItem = state.dishes.find(
                (item) => item.id === id,
            );

            if(findItem){
                findItem.count++;
            }
            state.totalPrice = state.dishes.reduce((acc, value) => {
                return acc + (+value.price) * value.count;
            }, 0);
        },
        decrease(state,{payload:id}){
            const findItem = state.dishes.find(
                (item) => item.id === id,
            );

            if(findItem && findItem.count){
               findItem.count--;
            }

            state.totalPrice = state.dishes.reduce((acc, value) => {
                return acc + (+value.price) * value.count;
            }, 0);
        },
        onOpen(state){
            state.isVisible = true;
        },
        onClose(state){
            state.isVisible = false;
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

export const selectVisible = (state:RootState)=>state.user.isVisible;
export const {addUserDish,
    deleteUserDish,
    increase,
    decrease,
    onOpen,onClose} = userSlice.actions;
export const userReducers = userSlice.reducer;