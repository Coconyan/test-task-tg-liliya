import { FC, useState } from "react";
import { Badge, Button, Card, CloseButton, Group, Text } from "@mantine/core";

import { Props } from "./Note.types";
import { deleteNote, useAppDispatch } from "../../store";
import { NoteEditInputs } from "../NoteEditInputs";

export const Note: FC<Props> = ({ text, id, title }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useAppDispatch();

  const deleteNoteHandler = () => {
    dispatch(deleteNote({ id }));
  }

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {isEdit
        ? (<NoteEditInputs text={text} id={id} title={title} setEdit={setEdit} />)
        : (
          <>
            <Group position="right">
              <CloseButton aria-label="Delete card" onClick={deleteNoteHandler} />
            </Group>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{title}</Text>
              <Badge color="pink" variant="light">
                {id}
              </Badge>
            </Group>
            <Text size="sm" color="dimmed">
              <Text weight={500}>{text}</Text>
            </Text>
            <Group position="right">
              <Button onClick={() => setEdit(true)}>Edit</Button>
            </Group>
          </>
        )}
    </Card>
  );
};

