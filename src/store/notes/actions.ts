import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction<{ id: number; title: string; text: string; important: boolean; }>(
  "notes/addNote"
);

export const editNote = createAction<{ id: number; title: string; text: string; important: boolean; }>(
  "notes/editNote"
);

export const deleteNote = createAction<{ id: number; }>(
  "notes/deleteNote"
);
