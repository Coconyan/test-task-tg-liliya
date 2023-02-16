export interface EditInputs {
  id: string;
  text: string;
  title: string;
  important: boolean;
}

export interface Props {
  text: string;
  id: number;
  title: string;
  important: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
