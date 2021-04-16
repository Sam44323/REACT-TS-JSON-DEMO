export interface ListItems {
  id: number;
  title: string;
}

export interface ListItemProps extends ListItems {
  showDetails: (id: number) => void;
}

export interface ItemStateType extends ListItems {
  completed: boolean;
  userId: number;
}
