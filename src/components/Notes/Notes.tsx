import { notesSelectors, useAppSelector } from "../../store";

import { Note } from "../Note";
import { NotesPagination } from "../Pagination";

import styles from "./notes.module.scss";

export const ITEMS_PER_PAGE = 9;

export const Notes = () => {
  const notesList = useAppSelector(notesSelectors.list);
  const { activePage } = useAppSelector(notesSelectors.pagination);

  return (
    <>
      <div className={styles.notes}>
        {[...notesList].sort((prev, next) => Number(next.important) - Number(prev.important)) // сортируем по наличию флага important
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE) // берем нужный кусок в соответсвии с активной страницей
          .map((item) => {
            return (
              <Note
                key={item.id}
                title={item.title}
                text={item.text}
                important={item.important}
                id={item.id}
              />
            );
          })}
      </div>
      <NotesPagination />
    </>
  );
};
