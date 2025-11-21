import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";

export const Button = ({ color }: ButtonProps) => {
  return (
    <StyledButton color={color}>
      <>lol</>
    </StyledButton>
  );
};
