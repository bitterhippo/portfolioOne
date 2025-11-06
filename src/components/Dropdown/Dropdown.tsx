import { DropdownContainer } from "./styles";
import { DropdownItem } from "./DropdownItem";
import type { DropdownProps } from "./types";

export function Dropdown({ items }: DropdownProps) {
  return (
    <DropdownContainer>
      {items.map((item) => (
        <DropdownItem
          key={String(item.value)}
          label={item.label}
          value={item.value}
        />
      ))}
    </DropdownContainer>
  );
}
