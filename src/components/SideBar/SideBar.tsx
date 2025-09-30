import type { SideBarProps } from "./types";
import { SidebarContainer } from "./styles";

export const SideBar = ({ isMobile, isOpen }: SideBarProps) => {
  return (
    <SidebarContainer isMobile={false} isOpen={false}>
      This is the nav!
    </SidebarContainer>
  );
};
