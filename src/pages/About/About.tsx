import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";
import { Daigoro } from "../../assets/images";

export default function About() {
  return (
    <PageContentWrapper>
      <Banner image={Daigoro}>
        <span>About</span>
      </Banner>
      <PageTextWrapper>Abouty!</PageTextWrapper>
    </PageContentWrapper>
  );
}
