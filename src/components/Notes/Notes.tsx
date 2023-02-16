import { Pagination } from "@mantine/core";
import { useState } from "react";
import { notesSelectors, useAppSelector } from "../../store";

import { Note } from "../Note";

import styles from "./notes.module.scss";

const ITEMS_PER_PAGE = 9;

export const Notes = () => {
  const notesList = useAppSelector(notesSelectors.list);
  const [activePage, setActivePage] = useState(1);
  const pageCount = Math.ceil(notesList.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className={styles.notes}>
        {[...notesList].sort((prev, next) => Number(next.important) - Number(prev.important)) // сортируем по наличию флага important
          .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE) // берем нужный кусок для пагинации
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
      <Pagination page={activePage} onChange={setActivePage} total={pageCount} position="center" />
    </>
  );
};
