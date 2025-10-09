import type { SideBarProps } from "./types";
import { SidebarContainer, StyledLink } from "./styles";
import ToggleButton from "./ToggleButton";
import { data } from "./constants";

export const SideBar = ({ isMobile, isOpen }: SideBarProps) => {
  return (
    <SidebarContainer isMobile={isMobile} isOpen={isOpen}>
      <ToggleButton />
      {Object.values(data).map(({ label, url }) => (
        <StyledLink key={url} to={url}>
          {label}
        </StyledLink>
      ))}
    </SidebarContainer>
  );
};
