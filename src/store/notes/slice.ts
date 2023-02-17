import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote, editNote, setActivePage, setPageCount } from "./actions";
import { InitialState } from "./types";

export const initialState: InitialState = {
  list: [],
  pagination: {
    activePage: 1,
    pageCount: 1
  }
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

    builder.addCase(setActivePage, (state, { payload }) => {
      state.pagination.activePage = payload;
    });

    builder.addCase(setPageCount, (state, { payload }) => {
      state.pagination.pageCount = payload;
    });
  },
});
