import {IDish} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteDish, addDish, editDish, fetchDishes, fetchOneDish} from "./adminThuck";
import {RootState} from "../app/store";

interface AdminDishesState {
    dishes:IDish[];
    dish:IDish | null;
    fetchLoading:boolean;
    editLoading:boolean;
    addLoading:boolean;
    deleteLoading:boolean;
    error:boolean;
}

const initialState:AdminDishesState = {
    dishes:[],
    dish:null,
    fetchLoading:false,
    editLoading:false,
    addLoading:false,
    deleteLoading:false,
    error:false,
}

export const adminSlice = createSlice({
    name:'adminDishes',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDishes.pending,(state)=>{
            state.fetchLoading = true;
        });
        builder.addCase(fetchDishes.fulfilled,(state,{payload:dishes})=>{
            state.fetchLoading = false;
            if(dishes) state.dishes = dishes;
        });
        builder.addCase(fetchDishes.rejected,(state)=>{
            state.fetchLoading = false;
            state.error = true;
        });
        builder.addCase(fetchOneDish.pending,(state)=>{
            state.fetchLoading = true;
        });
        builder.addCase(fetchOneDish.fulfilled,(state,{payload:dish})=>{
            state.fetchLoading = false;
            if(dish) state.dish = dish;
        });
        builder.addCase(fetchOneDish.rejected,(state)=>{
            state.fetchLoading = false;
            state.error = true;
        });
        builder.addCase(addDish.pending,(state)=>{
            state.addLoading = true;
        });
        builder.addCase(addDish.fulfilled,(state)=>{
            state.addLoading = false;
        });
        builder.addCase(addDish.rejected,(state)=>{
            state.addLoading = false;
            state.error = true;
        });
        builder.addCase(editDish.pending,(state)=>{
            state.editLoading = true;
        });
        builder.addCase(editDish.fulfilled,(state)=>{
            state.editLoading = false;
        });
        builder.addCase(editDish.rejected,(state)=>{
            state.editLoading = false;
            state.error = true;
        });
        builder.addCase(deleteDish.pending,(state)=>{
            state.deleteLoading = true;
        });
        builder.addCase(deleteDish.fulfilled,(state)=>{
            state.deleteLoading = false;
        });
        builder.addCase(deleteDish.rejected,(state)=>{
            state.deleteLoading = false;
            state.error = true;
        });
    }
})

export const selectDish = (state:RootState)=>state.admin.dish;
export const adminReducer = adminSlice.reducer;