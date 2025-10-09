import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";
import { Daigoro3 } from "../../assets/images";

export default function Resume() {
  return (
    <PageContentWrapper>
      <Banner image={Daigoro3}>
        <span>Resume</span>
      </Banner>
      <PageTextWrapper>Resume</PageTextWrapper>
    </PageContentWrapper>
  );
}
