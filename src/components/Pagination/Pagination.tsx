import { Pagination } from "@mantine/core";
import { useCallback, useEffect } from "react";

import { notesSelectors, setActivePage, setPageCount, useAppDispatch, useAppSelector } from "../../store";

import { ITEMS_PER_PAGE } from "../Notes/Notes";

export const NotesPagination = () => {
  const notesList = useAppSelector(notesSelectors.list);
  const { activePage, pageCount } = useAppSelector(notesSelectors.pagination);
  const dispatch = useAppDispatch();
  const calculatedPageCount = Math.ceil(notesList.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (calculatedPageCount !== pageCount) {
      dispatch(setPageCount(calculatedPageCount));
    };

    if (activePage !== 1 && activePage > pageCount) {
      dispatch(setActivePage(pageCount))
    };
  }, [pageCount, activePage, calculatedPageCount])

  const setActivePageHandler = useCallback((num: number) => {
    dispatch(setActivePage(num))
  }, [activePage, pageCount]);

  return (
      <Pagination
        page={activePage}
        onChange={setActivePageHandler}
        total={pageCount}
        position="center"
      />
  );
};
