import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction<{ id: number; title: string; text: string }>(
  "notes/addNote"
);
