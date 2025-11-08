import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";
import { Daigoro3 } from "../../assets/images";

export default function Resume() {
  return (
    <PageContentWrapper>
      <Banner image={Daigoro3}>
        <span>Resume</span>
      </Banner>
      <PageTextWrapper>Resume</PageTextWrapper>
      {/* <a href="/resume.pdf" download="Noah-Eror-Resume.pdf">
        PDF

        TO DO figure out what file doesn't work
      </a>
      <a href="/resume.docx" download="Noah-Eror-Resume.pdf">
        Micsoft Word
      </a> */}
    </PageContentWrapper>
  );
}
