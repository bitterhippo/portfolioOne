import type { SideBarProps } from "./types";
import { SidebarContainer } from "./styles";

export const SideBar = ({ isMobile, isOpen }: SideBarProps) => {
  return (
    <SidebarContainer isMobile={isMobile} isOpen={isOpen}>
      This is the nav!
    </SidebarContainer>
  );
};
