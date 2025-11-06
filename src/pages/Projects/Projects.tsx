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
import { useSelectedProject } from "../../components/Dropdown/useSelectedProject";
import { CommitList, Dropdown } from "../../components";
import { ProjectData, ProjectDescriptions } from "../../data/ProjectsData";

export default function Projects() {
  const { selected } = useSelectedProject();
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
          <Dropdown items={ProjectData} />
          <ProjectSelectorContentBox>
            {selected && ProjectDescriptions[selected]}
          </ProjectSelectorContentBox>
        </ProjectSelectorWrapper>
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
