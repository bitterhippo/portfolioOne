import type { DropdownItemProps } from "./types";
import { Item } from "./styles";
import { useSelectedProject } from "./useSelectedProject";

export const DropdownItem = ({ label, value }: DropdownItemProps) => {
  //TODO implement highlighting based on selected item
  const { selected, setSelected } = useSelectedProject();
  return (
    <Item
      isSelected={value === selected}
      tabIndex={0}
      onClick={() => setSelected(value)}
    >
      {label}
    </Item>
  );
};
