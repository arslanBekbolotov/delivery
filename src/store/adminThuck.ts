import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { IApiDish, IDish, TDishMutation } from "../types";

export const fetchDishes = createAsyncThunk("adminDishes/fetch", async () => {
  const { data } = await axiosApi<IApiDish | null>("dishes.json");

  return data
    ? Object.keys(data).map((key) => ({ ...data[key], id: key }))
    : null;
});

export const fetchOneDish = createAsyncThunk<IDish | null, string>(
  "adminDishes/fetchOne",
  async (id) => {
    const { data } = await axiosApi<TDishMutation | null>(`dishes/${id}.json`);
    return data ? { ...data, id } : null;
  },
);

export const addDish = createAsyncThunk(
  "adminDishes/addDish",
  async (dish: TDishMutation) => {
    await axiosApi.post("dishes.json", dish);
  },
);

export const editDish = createAsyncThunk(
  "adminDishes/editDish",
  async (dish: IDish) => {
    await axiosApi.put(`dishes/${dish.id}.json`, dish);
  },
);

export const deleteDish = createAsyncThunk(
  "adminDishes/deleteDish",
  async (id: string) => {
    await axiosApi.delete(`dishes/${id}.json`);
  },
);
