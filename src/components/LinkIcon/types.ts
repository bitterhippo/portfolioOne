import { Linkedin, GitHub, Mail } from "react-feather";

export const icons = {
  linkedin: Linkedin,
  github: GitHub,
  mail: Mail,
} as const;

type IconName = keyof typeof icons;

export interface LinkIconProps {
  name: IconName;
  size?: number;
  color?: string;
}
