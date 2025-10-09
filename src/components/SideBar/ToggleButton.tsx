import { Maximize, Minimize } from "react-feather";
import { ToggleButtonContainer } from "./styles";

export default function ToggleButton() {
  return (
    <ToggleButtonContainer isOpen={false}>
      <Maximize />
    </ToggleButtonContainer>
  );
}
