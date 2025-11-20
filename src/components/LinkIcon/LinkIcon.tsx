import { icons } from "./types";
import type { LinkIconProps } from "./types";

export const LinkIcon = ({
  name,
  size = 16,
  color = "currentColor",
}: LinkIconProps) => {
  const Icon = icons[name];
  return Icon ? <Icon size={size} color={color} /> : null;
};
