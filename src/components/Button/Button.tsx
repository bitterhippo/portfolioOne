import type { ButtonProps } from "./types";
import { ButtonStyle } from "./styles";

export const Button = ({ color }: ButtonProps) => {
  return (
    <ButtonStyle color={color}>
      <>lol</>
    </ButtonStyle>
  );
};
