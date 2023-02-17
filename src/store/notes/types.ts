export interface InitialState {
  list: {
    id: number;
    title: string;
    text: string;
    important: boolean;
  }[];

  pagination: {
    activePage: number;
    pageCount: number;
  };
}
