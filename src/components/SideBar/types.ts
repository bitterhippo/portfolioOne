export interface SideBarProps {
  isMobile: boolean;
  isOpen: boolean;
  sideBarHandler: VoidFunction;
}

export interface ToggleButtonProps {
  isSideBarExpanded: boolean;
  sideBarHandler: any;
}
