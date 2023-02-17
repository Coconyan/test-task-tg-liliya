import { RootState } from "../store";

export const list = (state: RootState) => state.notes.list;
export const pagination = (state: RootState) => state.notes.pagination;
