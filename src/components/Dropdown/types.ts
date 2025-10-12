export type SetSelectedHandler<T = string> = (value: T) => void;

export type DropdownItemData<T = string> = {
  label: string;
  value: T;
};

export interface DropdownItemProps<T = string> extends DropdownItemData<T> {
  setSelectedDropdownItemHandler: SetSelectedHandler<T>;
}

export interface DropdownProps<T = string> {
  items: DropdownItemData[];
  setSelectedDropdownItemHandler: SetSelectedHandler<T>;
}
