import type { SideBarProps } from "./types";
import { SidebarContainer } from "./styles";
import { data } from "./constants";
import { Link } from "react-router-dom";

export const SideBar = ({ isMobile, isOpen }: SideBarProps) => {
  return (
    <SidebarContainer isMobile={isMobile} isOpen={isOpen}>
      {Object.values(data).map(({ label, url }) => (
        <Link key={url} to={url}>
          {label}
        </Link>
      ))}
    </SidebarContainer>
  );
};
