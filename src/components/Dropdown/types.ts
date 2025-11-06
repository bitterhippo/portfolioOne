type ProjectKey = "1" | "2" | "3";

export type DropdownItemData = {
  label: string;
  value: ProjectKey;
};

export interface DropdownItemProps extends DropdownItemData {}

export interface DropdownProps {
  items: DropdownItemData[];
}
