export type Item = {
  id: string;
  task: string;
};

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;
