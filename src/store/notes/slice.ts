import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote, editNote } from "./actions";
import { InitialState } from "./types";

export const initialState: InitialState = {
  list: [],
};

export const slice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNote, (state, { payload }) => {
      state.list = [...state.list, payload];
    });

    builder.addCase(editNote, (state, { payload }) => {
      state.list = [...state.list.map((item) => 
        item.id === payload.id ? payload : item
      )];
    });

    builder.addCase(deleteNote, (state, { payload }) => {
      state.list = [...state.list.filter((item) => item.id !== payload.id)];
    });
  },
});
