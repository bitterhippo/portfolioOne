import { DropdownContainer } from "./styles";
import { DropdownItem } from "./DropdownItem";
import type { DropdownProps } from "./types";

export const Dropdown = ({
  items,
  setSelectedDropdownItemHandler,
}: DropdownProps) => {
  return (
    <DropdownContainer>
      {items.map((item) => (
        <DropdownItem
          key={item.value}
          label={item.label}
          value={item.value}
          setSelectedDropdownItemHandler={setSelectedDropdownItemHandler}
        />
      ))}
    </DropdownContainer>
  );
};
