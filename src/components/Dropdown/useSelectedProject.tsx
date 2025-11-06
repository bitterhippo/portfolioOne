import { useState, useContext, createContext } from "react";
import type { ProjectKey } from "../../data/ProjectsData";

const SelectedProjectContext = createContext<{
  selected: ProjectKey | null;
  setSelected: React.Dispatch<React.SetStateAction<ProjectKey | null>>;
} | null>(null);

export const SelectedProjectProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selected, setSelected] = useState<ProjectKey | null>("1");
  return (
    <SelectedProjectContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedProjectContext.Provider>
  );
};

export function useSelectedProject() {
  const ctx = useContext(SelectedProjectContext);
  if (!ctx)
    throw new Error(
      "useSelectedProject must be used within SelectedProjectProvider"
    );
  return ctx;
}
