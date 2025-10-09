import { Daigoro2 } from "../../assets/images";
import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";

export default function Projects() {
  return (
    <PageContentWrapper>
      <Banner image={Daigoro2}>
        <span>Projects</span>
      </Banner>
      <PageTextWrapper>Projects</PageTextWrapper>
    </PageContentWrapper>
  );
}
