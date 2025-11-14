import {
  PageContentWrapper,
  Banner,
  PageTextWrapper,
  StyledH1,
} from "../styles";
import { DaigoroTile } from "../../assets/images";

export default function Resume() {
  return (
    <PageContentWrapper>
      <Banner image={DaigoroTile}>
        <span>Resume</span>
      </Banner>
      <PageTextWrapper>
        <StyledH1>Resume</StyledH1>
        <a href="/resume.pdf" download="Noah-Eror-Resume.pdf">
          PDF TO DO figure out what file doesn't work
        </a>
        <a href="/resume.docx" download="Noah-Eror-Resume.pdf">
          Micsoft Word
        </a>
      </PageTextWrapper>
    </PageContentWrapper>
  );
}
