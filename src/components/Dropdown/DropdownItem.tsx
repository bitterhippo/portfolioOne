import type { DropdownItemProps } from "./types";
import { Item } from "./styles";

export const DropdownItem = ({
  label,
  value,
  setSelectedDropdownItemHandler,
}: DropdownItemProps) => {
  return (
    <Item onClick={() => setSelectedDropdownItemHandler(value)}>{label}</Item>
  );
};
