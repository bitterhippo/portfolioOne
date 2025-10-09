import { Maximize, Minimize } from "react-feather";
import { ToggleButtonContainer } from "./styles";
import type { ToggleButtonProps } from "./types";

export default function ToggleButton({
  isSideBarExpanded,
  sideBarHandler,
}: ToggleButtonProps) {
  return (
    <ToggleButtonContainer isOpen={isSideBarExpanded} onClick={sideBarHandler}>
      {isSideBarExpanded ? <Maximize /> : <Minimize />}
    </ToggleButtonContainer>
  );
}
