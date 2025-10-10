import { DropdownContainer, Item } from "./styles";
import type { DropdownProps } from "./types";

export const Dropdown = ({ items }: DropdownProps) => {
  return (
    <DropdownContainer>
      {items.map((item) => (
        <Item key={item.value} />
      ))}
    </DropdownContainer>
  );
};
