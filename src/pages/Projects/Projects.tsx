import { Daigoro2 } from "../../assets/images";
import { useState, useEffect } from "react";
import {
  PageContentWrapper,
  Banner,
  PageTextWrapper,
  StyledH1,
  StyledH2,
  StyledBody,
  ProjectSelectorContentBox,
} from "../styles";
import { CommitList } from "../../components";
import { ProjectData, ProjectDescriptions } from "../../data/ProjectsData";
import type { ProjectKey } from "../../data/ProjectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectKey | "">("");
  const DropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedProject(e.target.value as ProjectKey | "");
  return (
    <PageContentWrapper>
      <Banner image={Daigoro2}>
        <span>Projects</span>
      </Banner>
      <PageTextWrapper>
        <StyledH1>Recent Activity</StyledH1>
        <CommitList />
        <StyledH2>Projects</StyledH2>
        <StyledBody>
          Select a project from the dropdown below and information relating to
          that project will be displayed.
        </StyledBody>
        <select
          style={{ width: "100px" }}
          value={selectedProject}
          onChange={DropdownChangeHandler}
        >
          {ProjectData.map((item) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
        <ProjectSelectorContentBox>
          {selectedProject !== "" && ProjectDescriptions[`${selectedProject}`]}
        </ProjectSelectorContentBox>
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
