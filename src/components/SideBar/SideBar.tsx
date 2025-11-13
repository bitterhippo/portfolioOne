import type { SideBarProps } from "./types";
import {
  SidebarContainer,
  SideBarWrapper,
  SocialIconsContainer,
  StyledLink,
} from "./styles";
import ToggleButton from "./ToggleButton";
import { data } from "./constants";

export const SideBar = ({ isMobile, isOpen, sideBarHandler }: SideBarProps) => {
  return (
    <SideBarWrapper>
      <SidebarContainer isMobile={isMobile} isOpen={isOpen}>
        <ToggleButton
          isSideBarExpanded={true}
          sideBarHandler={sideBarHandler}
        />
        {Object.values(data).map(({ label, url }) => (
          <StyledLink key={url} to={url}>
            {label}
          </StyledLink>
        ))}
      </SidebarContainer>

      <SocialIconsContainer></SocialIconsContainer>
    </SideBarWrapper>
  );
};
