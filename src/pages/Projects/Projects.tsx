import { Daigoro2 } from "../../assets/images";
import {
  PageContentWrapper,
  Banner,
  PageTextWrapper,
  StyledH1,
  StyledH2,
  StyledBody,
} from "../styles";
import CommitList from "../../components/CommitList/CommitList";

export default function Projects() {
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
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
