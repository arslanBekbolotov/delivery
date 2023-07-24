import {IDish} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteDish, addDish, editDish, fetchDishes, fetchOneDish} from "./adminThuck";
import {RootState} from "../app/store";


interface AdminDishesState {
    dishes:IDish[],
    dish:IDish | null;
    loading:boolean,
    error:boolean,
}

const initialState:AdminDishesState = {
    dishes:[],
    dish:null,
    loading:false,
    error:false,
}

export const adminSlice = createSlice({
    name:'adminDishes',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDishes.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchDishes.fulfilled,(state,{payload:dishes})=>{
            state.loading = false;
            if(dishes) state.dishes = dishes;
        });
        builder.addCase(fetchDishes.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(fetchOneDish.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchOneDish.fulfilled,(state,{payload:dish})=>{
            state.loading = false;
            if(dish) state.dish = dish;
        });
        builder.addCase(fetchOneDish.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(addDish.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(addDish.fulfilled,(state)=>{
            state.loading = false;
        });
        builder.addCase(addDish.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(editDish.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(editDish.fulfilled,(state)=>{
            state.loading = false;
        });
        builder.addCase(editDish.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        });
        builder.addCase(deleteDish.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(deleteDish.fulfilled,(state)=>{
            state.loading = false;
        });
        builder.addCase(deleteDish.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        });
    }
})

export const selectDish = (state:RootState)=>state.admin.dish;
export const adminReducer = adminSlice.reducer;