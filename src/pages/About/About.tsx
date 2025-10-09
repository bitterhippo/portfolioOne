import { PageContentWrapper, Banner, PageTextWrapper } from "../styles";
import { Daigoro } from "../../assets/images";

export default function About() {
  return (
    <PageContentWrapper>
      <Banner image={Daigoro} />
      <PageTextWrapper>Abouty!</PageTextWrapper>
    </PageContentWrapper>
  );
}
