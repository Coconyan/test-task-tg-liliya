import { Input, Button, Group, Checkbox } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

import { editNote, useAppDispatch } from "../../store";

import { EditInputs, Props } from "./NoteEditInputs.types";

import styles from "./noteEditInputs.module.scss";

import { FC } from "react";

export const NoteEditInputs: FC<Props> = ({ text, id, title, important, setEdit }) => {
  const { register, handleSubmit, reset } = useForm<EditInputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<EditInputs> = (data) => {
    const { text, title, important } = data;
    dispatch(editNote({ id, text, title, important }));
    resetNoteHandler();
  };

  const resetNoteHandler = () => {
    reset()
    setEdit(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        defaultValue={title}
        {...register("title", { required: true })}
      />
      <Input
        className={styles.input}
        defaultValue={text}
        {...register("text", { required: true })}
      />
      <Checkbox
        defaultChecked={important}
        label="Important note"
        {...register("important")}
      />
      <Group position="apart" mt="md" mb="xs">
        <Button type="submit">Save</Button>
        <Button onClick={resetNoteHandler}>Cancel</Button>
      </Group>
    </form>
  );
};
