//TODO update type of items

export type DropdownItemProps = {
  label: string;
  value: string | number;
};

export interface DropdownProps {
  items: DropdownItemProps[];
}
