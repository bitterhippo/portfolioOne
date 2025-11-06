import type { DropdownItemData } from "../components/Dropdown/types";

export type ProjectKey = "1" | "2" | "3";

export const ProjectData: DropdownItemData[] = [
  { label: "project one", value: "1" },
  { label: "project two", value: "2" },
  { label: "project three", value: "3" },
];

export const ProjectDescriptions: Record<ProjectKey, string> = {
  "1": "project one",
  "2": "project two",
  "3": "project three",
};
