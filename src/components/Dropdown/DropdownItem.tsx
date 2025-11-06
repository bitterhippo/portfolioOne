import type { DropdownItemProps } from "./types";
import { Item } from "./styles";

export const DropdownItem = ({
  label,
  value,
  setSelectedDropdownItemHandler,
}: DropdownItemProps) => {
  return (
    <Item tabIndex={0} onClick={() => setSelectedDropdownItemHandler(value)}>
      {label}
    </Item>
  );
};
