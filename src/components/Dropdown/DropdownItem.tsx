import type { DropdownItemProps } from "./types";
import { Item } from "./styles";

export const DropdownItem = ({ label, value }: DropdownItemProps) => {
  //TODO remove this
  return (
    <Item
      isSelected={value === null}
      tabIndex={0}
      onClick={() => console.log(value)}
    >
      {label}
    </Item>
  );
};
