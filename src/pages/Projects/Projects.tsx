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
import { ProjectData } from "../../data/ProjectsData";
import { useState } from "react";

export default function Projects() {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<string>("");
  console.log(selectedDropdownItem);
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
            items={[...ProjectData]}
            setSelectedDropdownItemHandler={setSelectedDropdownItem}
          />
          {/* TODO - this could easily just be absorbed by the dropdown */}
          <ProjectSelectorContentBox />
        </ProjectSelectorWrapper>
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
