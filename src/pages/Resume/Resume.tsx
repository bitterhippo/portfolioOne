import {
  PageContentWrapper,
  Banner,
  PageTextWrapper,
  StyledH1,
} from "../styles";
import { DaigoroTile } from "../../assets/images";
import { ProjectSelectorContentBox } from "../styles";

export default function Resume() {
  return (
    <PageContentWrapper>
      <Banner image={DaigoroTile}>
        <span>Resume</span>
      </Banner>
      <PageTextWrapper>
        <StyledH1>Resume</StyledH1>
        <span>
          My current CV can be downloaded in{" "}
          <a href="/files/resume.pdf" download="resume.pdf">
            PDF
          </a>{" "}
          or{" "}
          <a href="/files/resume.docx" download="resume.docx">
            Docx
          </a>{" "}
          format.
        </span>
        <ProjectSelectorContentBox height="100%">
          <embed
            src="/files/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </ProjectSelectorContentBox>
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
