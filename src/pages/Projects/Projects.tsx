import { Daigoro2 } from "../../assets/images";
import {
  PageContentWrapper,
  Banner,
  PageTextWrapper,
  StyledH1,
  StyledH2,
  StyledBody,
  ProjectSelectorWrapper,
  ProjectSelectorContentBox,
} from "../styles";
import { CommitList, Dropdown } from "../../components";
import { ProjectData, ProjectDescriptions } from "../../data/ProjectsData";
import { useState } from "react";
import type { ProjectKey } from "../../data/ProjectsData";

export default function Projects() {
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState<ProjectKey | null>("1");
  //TODO remove this

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
        <ProjectSelectorWrapper>
          <Dropdown
            items={ProjectData} // type: DropdownItemData<ProjectKey>[]
            setSelectedDropdownItemHandler={setSelectedDropdownItem} // type: (value: ProjectKey | null) => void
          />
          <ProjectSelectorContentBox>
            {selectedDropdownItem && ProjectDescriptions[selectedDropdownItem]}
          </ProjectSelectorContentBox>
        </ProjectSelectorWrapper>
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
