import type { DropdownItemProps } from "./types";
import { Item } from "./styles";

export const DropdownItem = ({ label }: DropdownItemProps) => {
  return <Item>{label}</Item>;
};
