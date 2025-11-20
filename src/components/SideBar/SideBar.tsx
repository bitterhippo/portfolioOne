import type { SideBarProps } from "./types";
import {
  SidebarContainer,
  SideBarWrapper,
  SocialIconsContainer,
  StyledLink,
} from "./styles";
import ToggleButton from "./ToggleButton";
import { data } from "./constants";
import { LinkIcon } from "../LinkIcon/LinkIcon";

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

      <SocialIconsContainer>
        <a
          href="https://github.com/bitterhippo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon name="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/noah-eror-03386710a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon name="linkedin" />
        </a>
        <a href="mailto:noahjeror@gmail.com">
          <LinkIcon name="mail" />
        </a>
      </SocialIconsContainer>
    </SideBarWrapper>
  );
};
