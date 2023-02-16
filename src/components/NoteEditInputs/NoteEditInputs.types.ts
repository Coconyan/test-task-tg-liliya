export interface EditInputs {
  id: string;
  text: string;
  title: string;
}

export interface Props {
  text: string;
  id: number;
  title: string;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
